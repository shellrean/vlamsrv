<?php
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

Route::post('login', 'Auth\LoginController@login');
Route::group(['prefix' => 'v2', 'namespace' => 'Api\v2'], function() {
    
    Route::post('pusat/status', 'PusatController@status');
    Route::post('pusat/register-server', 'PusatController@registerServer');
    Route::get('pusat/serial', 'PusatController@serial');

});
Route::get('v2/logout', 'Auth\LoginController@logout')->middleware('auth:api');


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

        Route::get('ujian/aktif', 'UjianController@ujianAktif');
        Route::post('ujian/kelompok', 'UjianController@kelompok');
        Route::post('ujian/ubah-test', 'UjianController@ubahTest');
        Route::post('ujian/rilis-token', 'UjianController@rilisToken');
        Route::post('ujian/simpan-status', 'UjianController@simpanStatus');
        Route::post('ujian/selesai', 'UjianController@forceClose');
        Route::post('ujian/reset', 'UjianController@resetUjianPeserta');
        Route::get('ujian/sesi', 'UjianController@getAllSesi');

        Route::get('sinkron-teeer', 'PusatController@sinkron_syc');
        
        Route::post('pusat/sinkron', 'PusatController@sinkron');
        Route::post('pusat/ftp', 'PusatController@downloadFile');
        Route::get('pusat/check-data', 'PusatController@checkData');
    });
});


/*
|--------------------------------------------------------------------------
| API Routes Fo peserta
|--------------------------------------------------------------------------
|
*/
Route::post('/v2/logedin','Auth\PesertaLoginController@login');
Route::get('/v2/peserta-authenticated', 'Auth\PesertaLoginController@authenticated')->middleware('peserta');

Route::group(['middleware' => 'peserta', 'prefix' => 'v2'], function() {
    Route::get('/peserta/logout','Auth\PesertaLoginController@logout');
    
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