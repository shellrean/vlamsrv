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

use Storage;
use Response;
use File;

use DB;

class PusatController extends Controller
{
    public function sinkron()
    {
    	$server = IdentifyServer::first();
    	$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL,"http://localhost:8000/api/pusat/sinkron");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS,
		            "server_name=$server->kode_server");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$server_output = curl_exec($ch);
		$deco = json_decode( $server_output, true );

		curl_close ($ch);


		$deco = $deco['data'];

		if($deco['matpels'] > 0) {
			DB::table('matpels')->delete();
			Matpel::insert($deco['matpels']);
		}

		if($deco['banksoal'] > 0) {
			DB::table('banksoals')->delete();
			Banksoal::insert($deco['banksoal']);
		}

		if($deco['soal'] > 0) {
			DB::table('soals')->delete();
			Soal::insert($deco['soal']);
		}
		
		if($deco['jawaban'] > 0) {
			DB::table('jawaban_soals')->delete();
			JawabanSoal::insert($deco['jawaban']);
		}
		
		if($deco['jadwal'] > 0) {
			DB::table('jadwals')->delete();
			Jadwal::insert($deco['jadwal']);
		}
		
		if($deco['peserta'] > 0) {
			DB::table('pesertas')->delete();
			Peserta::insert($deco['peserta']);
		}

		foreach($deco['files'] as $file) {
			$exists = Storage::disk('ftp')->get($file['dirname']."/".$file['filename']);
    		Storage::disk('public')->put($file['dirname']."/".$file['filename'], $exists);
		}
		
		
		return response()->json($deco);
    }

    public function identify()
    {
    	$dentify = IdentifyServer::first();
    	return response()->json(['data' => $dentify]);
    }

    public function connect()
    {
    	$server = IdentifyServer::first();
    	$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL,"http://localhost:8000/api/pusat/connect");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS,
		            "server_name=$server->kode_server");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$server_output = curl_exec($ch);

		if(!$server_output) {
			return response()->json(['data' => 'unconnect']);
		}
		
		$deco = json_decode( $server_output, true );

		if($deco['data'] == 'unregistered') {
			return response()->json(['data' => 'unregistered']);
		}

		curl_close ($ch);

		return response()->json($deco);
    }

    public function downloadFile(Request $request) 
    {
    	$exists = Storage::disk('ftp')->get('bahasa-indonesia/20191123-6.png');
    	Storage::disk('public')->put('bahasa-indonesia/20191123-6.png', $exists);
    }

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

    public function status(Request $request)
    {
    	$dentify = IdentifyServer::first();
    	if($dentify) {
    		if($dentify->serial_number != $request->data) {
    			return response()->json(['status' => 'uninstalled']);
    		}
    		return response()->json(['status' => 'installed']);
    	}

    	return response()->json(['status' => 'uninstalled']);
    }

    public function registerServer(Request $request)
    {
    	$data = $request->all();

    	$identify = IdentifyServer::first();
  	
  		if($identify) {
  			return response()->json(['status' => 'lock']);
  		}

  		$kode_server  = $data['server']['id_server'];
  		$serial_number = $data['serial']['data'];

  		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL,"http://localhost:8000/api/pusat/register-server");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS,
		            "server_name=$kode_server&serial_number=$serial_number");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$server_output = curl_exec($ch);
		$deco = json_decode( $server_output, true );
		curl_close ($ch);

		if($deco['status'] == 'error') {
			return response()->json(['status' => 'serial_number pada server sudah ada']);
		}

  		IdentifyServer::create([
  			'serial_number'		=> $serial_number,
  			'kode_server'		=> $kode_server,
  			'isregister'		=> 1 
  		]);

  		User::create([
  			'name'				=> 'Administrator',
  			'email'				=> 'admin@shellrean.com',
  			'password'			=> bcrypt($data['server']['password'])
  		]);	

    	return response()->json(['status' => 'register berhasil']);
    }
}
