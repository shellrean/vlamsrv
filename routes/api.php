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
Route::get('/v2/logout', 'Auth\LoginController@logout')->middleware('auth:api');
Route::group(['middleware' => 'auth:api', 'namespace' => 'Api'], function() {

    Route::group(['namespace' => 'v2', 'prefix' => 'v2'], function() {
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
});

Route::post('v2/pusat/sinkron', 'Api\v2\PusatController@sinkron');
Route::post('v2/pusat/ftp', 'Api\v2\PusatController@downloadFile');
Route::get('v2/pusat/check-data', 'Api\v2\PusatController@checkData');

Route::get('v2/pusat/serial', 'Api\v2\PusatController@serial');


// Peserta
Route::post('/v2/logedin','Auth\PesertaLoginController@login');

Route::group(['middlewarde' => 'peserta', 'prefix' => 'v2'], function() {
    Route::post('/logout','Auth\PesertaLoginController@logout');

    Route::get('/jadwal/getday', 'Api\JadwalController@getday');
    Route::get('/jadwal/aktif', 'Api\UjianController@getUjianAktif');

    Route::get('/ujian/{id}','Api\UjianController@getsoal');
    Route::post('/ujian/setter','Api\UjianController@getsoal');
    Route::post('/ujian','Api\UjianController@store');
    Route::get('/ujian/jawaban/{id}', 'Api\UjianController@getJawabanPeserta');
    Route::post('/ujian/filled', 'Api\UjianController@filled');
    Route::post('/ujian/sisa-waktu', 'Api\UjianController@sisaWaktu');
    Route::post('/ujian/ujian-siswa-det', 'Api\UjianController@detUjian');
    Route::post('/ujian/ragu-ragu', 'Api\UjianController@setRagu');
    Route::post('/ujian/selesai', 'Api\UjianController@selesai');
    Route::post('/ujian/cektoken','Api\UjianController@cekToken');

    Route::post('/ujian/mulai-peserta', 'Api\UjianController@mulaiPeserta');
});