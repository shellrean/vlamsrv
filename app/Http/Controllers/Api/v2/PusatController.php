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
use App\File as Filnder;

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
          switch ($request->table) {
            case 'pesertas':
              Peserta::insert($request->data);
              $server->peserta = 1;
              $server->save();
              break;
            case 'matpels':
              Matpel::insert($request->data);
              $server->matpel = 1;
              $server->save();
              break;
            case 'banksoals':
              Banksoal::insert($request->data);
              $server->banksoal = 1;
              $server->save();
              break;
            case 'soals':
              Soal::insert($request->data);
              $server->soal = 1;
              $server->save();
              break;
            case 'jawaban_soals':
              JawabanSoal::insert($request->data);
              $server->pilihan_soal = 1;
              $server->save();
              break;
            case 'file':
              Filder::insert($request->data);
              $server->gambar = 1;
              $server->save();
              break;
            case 'jadwals':
              Jadwal::insert($request->data);
              $server->jadwal = 1;
              $server->save();
              break;
            default:
          }
        }
        else {
		  DB::table('files')->delete();
          DB::table('files')->insert($request->all()['files']);
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
    	$hostname = env('SERVER_CENTER');

    	$server = IdentifyServer::first();
    	$ch = curl_init();

  		curl_setopt($ch, CURLOPT_URL,"$hostname/api/v1/pusat/connect");
  		curl_setopt($ch, CURLOPT_POST, 1);
  		curl_setopt($ch, CURLOPT_POSTFIELDS,
  		"server_name=$server->kode_server&serial_number=$server->serial_number");
  		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

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
      $hostname = env('SERVER_CENTER');
    
    	$data = $request->all();

    	$identify = IdentifyServer::first();

  	
  		if($identify) {
  			return response()->json(['status' => 'This device has been locked', 'type' => 'danger']);
  		}

  		$kode_server  = $data['server']['id_server'];
      $serial_number = $data['serial']['data'];
      $password = $data['server']['password'];

  		$ch = curl_init();
		$uerl = $hostname.'/api/v1/pusat/register-server';
		  curl_setopt($ch, CURLOPT_URL,$uerl);
		  curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		  curl_setopt($ch, CURLOPT_POSTFIELDS,
"server_name=$kode_server&serial_number=$serial_number&password=$password");
		  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		  $server_output = curl_exec($ch);
		 $errmsg = curl_error($ch);
		$header = curl_getinfo($ch);

		  $deco = json_decode( $server_output, true );

		  curl_close ($ch);

      if(!$deco) {
        return response()->json(['status' => 'Tidak dapat terkoneksi ke server pusat','type' => 'error']);
      }

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
      
    	return response()->json(['status' => 'Register berhasil, login kembali', 'type' => 'success']);
    }

    /**
     * Upload hasil ujian
     *
     * @return \Illuminate\Http\Response
     */
    public function uploadHasil()
    {
        $ujian = UjianAktif::first();
        $siswa_ujians = SiswaUjian::where([
          'jadwal_id' => $ujian->ujian_id, 
          'uploaded' => 0,
          'status_ujian' => 1
        ]);

        $listed = $siswa_ujians->pluck('peserta_id');
        
        $siswa_ujian = $siswa_ujians->get();
        
        $datas = JawabanPeserta::where('jadwal_id', $ujian->ujian_id)
        ->whereIn('peserta_id', $listed)->get()->makeVisible('iscorrect');

        $identify = IdentifyServer::first();

        $ch = curl_init();

        $hostname = env("SERVER_CENTER");
        curl_setopt($ch, CURLOPT_URL,"$hostname/api/v1/pusat/upload-hasil");
        curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_POSTFIELDS,
                    "server_name=$identify->kode_server&datad=$datas");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);
        $deco = json_decode( $server_output, true );
	$header = curl_getinfo($ch);

        curl_close ($ch);
        
        if(!$deco) {
          return response()->json(['status' => 'error'],500);
        }

        $deco = $deco['data'];

        if($deco == 'OK') {
          foreach($siswa_ujian as $s) {
            $siswa = SiswaUjian::find($s->id);
            $siswa->uploaded = 1;
            $siswa->save();
          }
        }

        return response()->json(['data' => $deco,'uj' => $siswa_ujian]);
    }

    public function checkData()
    {
        $peserta = Peserta::count();
        $matpel = Matpel::count();
        $banksoal = Banksoal::count();
        $soal = Soal::count();
        $jawaban_soals = JawabanSoal::count();
        $jadwal = Jadwal::count();
        $gambar = Filnder::count();

        $data = [
          'peserta' => $peserta,
          'matpel'  => $matpel,
          'banksoal' => $banksoal,
          'soal'    => $soal,
          'jawaban_soal'  => $jawaban_soals,
          'jadwal'  => $jadwal,
          'gambar'  => $gambar
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
      DB::table('files')->delete();

      $server = IdentifyServer::first();
      
      $server->peserta = 0;
      $server->matpel = 0;
      $server->banksoal = 0;
      $server->soal = 0;
      $server->pilihan_soal = 0;
      $server->gambar = 0;
      $server->jadwal = 0;
      $server->save();

      Storage::deleteDirectory('public');

      return response()->json(['status' => 'OK']);
    }

    public function sinkron_syc()
    {
      for($i=0; $i < 10; $i++) {
        echo $i;
        echo str_repeat(' ',1024*64);
        flush();
      }
    }
}
