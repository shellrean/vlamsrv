<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/v2/pusat/status', 'API\v2\PusatController@status');
Route::post('/v2/pusat/register-server', 'API\v2\PusatController@registerServer');

Route::post('/v2/login', 'Auth\LoginController@login');
Route::group(['middleware' => 'auth.api', 'namespace' => 'Api\v2','prefix' => 'v2'], function() {
    Route::get('logout', 'AuthController@logout');
	Route::get('peserta', 'PesertaController@index');
    Route::get('peserta-login', 'PesertaController@pesertaLogin');

    Route::get('ujian', 'UjianController@index');
    Route::post('ujian/change-token', 'UjianController@changeToken');
    Route::get('ujian/get-peserta/{id}', 'UjianController@getPeserta');

    Route::get('pusat/identify', 'PusatController@identify');
    Route::get('pusat/connect', 'PusatController@connect');
    Route::get('pusat/upload-hasil', 'PusatController@uploadHasil');
    Route::post('pusat/hapus-data', 'PusatController@hapusData');

    Route::get('ujian/get-peserta', 'UjianController@pesertaAll');
    Route::post('peserta/reset', 'UjianController@resetPeserta');

    Route::get('/ujian/aktif', 'UjianController@ujianAktif');
    Route::post('/ujian/kelompok', 'UjianController@kelompok');
    Route::post('/ujian/ubah-test', 'UjianController@ubahTest');
    Route::post('/ujian/rilis-token', 'UjianController@rilisToken');
    Route::post('/ujian/simpan-status', 'UjianController@simpanStatus');
    Route::post('/ujian/selesai', 'UjianController@forceClose');
    Route::post('/ujian/reset', 'UjianController@resetUjianPeserta');
    Route::get('/ujian/sesi', 'UjianController@getAllSesi');

    Route::get('/sinkron-teeer', 'PusatController@sinkron_syc');
});

Route::post('/v2/pusat/sinkron', 'API\v2\PusatController@sinkron');
Route::post('/v2/pusat/ftp', 'API\v2\PusatController@downloadFile');
Route::get('/v2/pusat/check-data', 'API\v2\PusatController@checkData');

Route::get('/v2/pusat/serial', 'API\v2\PusatController@serial');


// Peserta
Route::post('/v2/login', 'Auth\LoginController@login');
Route::post('/v2/logedin','Auth\PesertaLoginController@login');

Route::group(['middlewarde' => 'peserta', 'prefix' => 'v2'], function() {
    Route::post('/logout','Auth\PesertaLoginController@logout');

    Route::get('/jadwal/getday', 'API\JadwalController@getday');
    Route::get('/jadwal/aktif', 'API\UjianController@getUjianAktif');

    Route::get('/ujian/{id}','API\UjianController@getsoal');
    Route::post('/ujian/setter','API\UjianController@getsoal');
    Route::post('/ujian','API\UjianController@store');
    Route::get('/ujian/jawaban/{id}', 'API\UjianController@getJawabanPeserta');
    Route::post('/ujian/filled', 'API\UjianController@filled');
    Route::post('/ujian/sisa-waktu', 'API\UjianController@sisaWaktu');
    Route::post('/ujian/ujian-siswa-det', 'API\UjianController@detUjian');
    Route::post('/ujian/ragu-ragu', 'API\UjianController@setRagu');
    Route::post('/ujian/selesai', 'API\UjianController@selesai');
    Route::post('/ujian/cektoken','API\UjianController@cekToken');

    Route::post('/ujian/mulai-peserta', 'API\UjianController@mulaiPeserta');
});