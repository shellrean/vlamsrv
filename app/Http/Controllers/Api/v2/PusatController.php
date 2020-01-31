<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http;

use App\Matpel;
use App\Banksoal;
use App\Soal;
use App\JawabanSoal;
use App\Jadwal;
use App\Peserta;
use App\IdentifyServer;
use App\User;
use App\UjianAktif;
use App\SiswaUjian;
use App\JawabanPeserta;
use App\HasilUjian;

use Storage;
use Response;
use File;

use DB;

class PusatController extends Controller
{
    /**
     * Get server lokal identify
     *
     * @return \Illuminate\Http\Response
     */
    public function sinkron(Request $request)
    {
     $server = IdentifyServer::first();

        if(isset($request->table)) {   
          DB::table($request->table)->delete();
          DB::table($request->table)->insert($request->data);
          switch ($request->table) {
            case 'pesertas':
              $server->peserta = 1;
              $server->save();
              break;
            case 'matpels':
              $server->matpel = 1;
              $server->save();
              break;
            case 'banksoals':
              $server->banksoal = 1;
              $server->save();
              break;
            case 'soals':
              $server->soal = 1;
              $server->save();
              break;
            case 'jawaban_soals':
              $server->pilihan_soal = 1;
              $server->save();
              break;
            case 'file':
              $server->gambar = 1;
              $server->save();
              break;
            case 'jadwals':
              $server->jadwal = 1;
              $server->save();
              break;
            default:
          }
        }
        else {
          foreach($request->all()['files'] as $file) {
            $exists = Storage::disk('ftp')->get($file['dirname']."/".$file['filename']);
            Storage::disk('public')->put($file['dirname']."/".$file['filename'], $exists);
            $server->gambar = 1;
            $server->save();
          }
        }

        return response()->json(['status' => 'OK']);
    }

    /**
     * Get server lokal identify
     *
     * @return \Illuminate\Http\Response
     */
    public function identify()
    {
    	$dentify = IdentifyServer::first();
    	return response()->json(['data' => $dentify]);
    }

    /**
     * Check connection with server pusat
     *
     * @return \Illuminate\Http\Response
     */
    public function connect()
    {
    	$hostname = "http://45.251.72.66";

    	$server = IdentifyServer::first();
    	$ch = curl_init();

  		curl_setopt($ch, CURLOPT_URL,"$hostname/api/pusat/connect");
  		curl_setopt($ch, CURLOPT_POST, 1);
  		curl_setopt($ch, CURLOPT_POSTFIELDS,
  		            "server_name=$server->kode_server&serial_number=$server->serial_number");
  		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  		$server_output = curl_exec($ch);

  		if(!$server_output) {
  			return response()->json(['data' => 'unconnect']);
  		}
  		
  		$deco = json_decode( $server_output, true );

  		if($deco['data'] == 'unregistered') {
  			return response()->json(['data' => 'unregistered']);
  		}

          if($deco['data'] == 'block') {
              return response()->json(['data' => 'block']);
          }

  		curl_close ($ch);

  		return response()->json($deco);
    }

    /**
     * Get serial number of device
     *
     * @return \Illuminate\Http\Response
     */
    public function serial() 
    {
    	ob_start();  

		  system('ipconfig /all');  
		
		  $mycom=ob_get_contents();  
		  ob_clean();  
		 
		  $findme = "Physical";  
		  $pmac = strpos($mycom, $findme);  
		
		  $mac=substr($mycom,($pmac+36),17);  
	  
		  $list = strtoupper(md5($mac));

		  return response()->json(['data' => $list]);  
    }

    /**
     * Check sttus installation of server lokal
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function status(Request $request)
    {
    	$dentify = IdentifyServer::first();
    	if($dentify) {
    		if($dentify->serial_number != $request->data) {
    			return response()->json(['status' => 'uninstalled']);
    		}
    		return response()->json(['status' => 'installed', 'username' => $dentify->kode_server]);
    	}

    	return response()->json(['status' => 'uninstalled']);
    }

    /**
     * Register server lokal
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registerServer(Request $request)
    {
      $hostname = "http://45.251.72.66";
    
    	$data = $request->all();

    	$identify = IdentifyServer::first();
  	
  		if($identify) {
  			return response()->json(['status' => 'This device has been locked', 'type' => 'danger']);
  		}

  		$kode_server  = $data['server']['id_server'];
      $serial_number = $data['serial']['data'];
      $password = $data['server']['password'];

  		$ch = curl_init();

		  curl_setopt($ch, CURLOPT_URL,"$hostname/api/pusat/register-server");
		  curl_setopt($ch, CURLOPT_POST, 1);
		  curl_setopt($ch, CURLOPT_POSTFIELDS,"server_name=$kode_server&serial_number=$serial_number&password=$password");
		  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		  $server_output = curl_exec($ch);
		  $deco = json_decode( $server_output, true );
		  curl_close ($ch);

      if($deco['status'] == 'error') {
        return response()->json(['status' => 'Akses ditolak, servername telah teregister pdata server pusat','type' => 'error']);
      }
      else if($deco['status'] == 'notfound') {
        return response()->json(['status' => 'Name server tidak ditemukan pada server pusat', 'type' => 'error']);
      }

  		IdentifyServer::create([
  			'serial_number'		=> $serial_number,
  			'kode_server'		  => $kode_server,
  			'isregister'		  => 1
  		]);

  		User::create([
        'name'				=> 'Administrator',
        'username'  => $kode_server,
  			'email'				=> 'admin@administrator.com',
  			'password'			=> bcrypt($deco['password'])
  		]);

      // return response()->json(['status' => $deco['password'], 'type' => 'success']);

    	return response()->json(['status' => 'Register berhasil, refresh browser dan login kembali', 'type' => 'success']);
    }

    /**
     * Upload hasil ujian
     *
     * @return \Illuminate\Http\Response
     */
    public function uploadHasil()
    {
        $ujian = UjianAktif::first();
        $siswa_ujian = SiswaUjian::where([
          'jadwal_id' => $ujian->ujian_id, 
          'uploaded' => 0,
          'status_ujian' => 1
        ])->with('hasil')->get();
        
        $datas = JawabanPeserta::where('jadwal_id', $ujian->ujian_id)->get();
        $esay = JawabanPeserta::where([
          'jadwal_id' => $ujian->ujian_id
        ])->where('jawab_essy', '!=',null)->get();

        $identify = IdentifyServer::first();

        $ch = curl_init();

        $hostname = env("SERVER_CENTER");
        curl_setopt($ch, CURLOPT_URL,"$hostname/api/pusat/upload-hasil");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,
                    "server_name=$identify->kode_server&req=$siswa_ujian&esay=$esay&data=$datas");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);
        $deco = json_decode( $server_output, true );

        curl_close ($ch);

        $deco = $deco['data'];

        if($deco == 'OK') {
          foreach($siswa_ujian as $s) {
            $siswa = SiswaUjian::find($s->id);
            $siswa->uploaded = 1;
            $siswa->save();
          }
        }

        return response()->json(['data' => $esay,'uj' => $siswa_ujian]);
    }

    public function checkData()
    {
        $peserta = Peserta::all()->count();
        $matpel = Matpel::all()->count();
        $banksoal = Banksoal::all()->count();
        $soal = Soal::all()->count();
        $jawaban_soals = JawabanSoal::all()->count();
        $jadwal = Jadwal::all()->count();

        $data = [
          'peserta' => $peserta,
          'matpel'  => $matpel,
          'banksoal' => $banksoal,
          'soal'    => $soal,
          'jawaban_soal'  => $jawaban_soals,
          'jadwal'  => $jadwal,
        ];

        return response()->json(['data' => $data]);
    }

    public function hapusData()
    {
      DB::table('ujian_aktif')->delete();
      DB::table('siswa_ujians')->delete();
      DB::table('soals')->delete();
      DB::table('pesertas')->delete();
      DB::table('matpels')->delete();
      DB::table('jawaban_soals')->delete();
      DB::table('jawaban_pesertas')->delete();
      DB::table('jadwals')->delete();
      DB::table('hasil_ujians')->delete();
      DB::table('banksoals')->delete();

      $server = IdentifyServer::first();
      
      $server->peserta = 0;
      $server->matpel = 0;
      $server->banksoal = 0;
      $server->soal = 0;
      $server->pilihan_soal = 0;
      $server->gambar = 0;
      $server->jadwal = 0;
      $server->save();

      return response()->json(['status' => 'OK']);
    }
}
