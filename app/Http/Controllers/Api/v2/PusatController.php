<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http;

use App\Matpel;
use App\Banksoal;
use App\Soal;
use App\JawabanSoal;
use DB;

class PusatController extends Controller
{
    public function sinkron()
    {
    	$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL,"http://localhost:8000/api/pusat/sinkron");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS,
		            "postvar1=value1&postvar2=value2&postvar3=value3");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$server_output = curl_exec($ch);
		$deco = json_decode( $server_output, true );

		curl_close ($ch);


		$deco = $deco['data'];

		DB::table('matpels')->delete();
		Matpel::insert($deco['matpels']);

		DB::table('banksoals')->delete();
		Banksoal::insert($deco['banksoal']);

		DB::table('soals')->delete();
		Soal::insert($deco['soal']);

		DB::table('jawaban_soals')->delete();
		JawabanSoal::insert($deco['jawaban']);

		return response()->json(['data' => 'insert']);
    }
}
