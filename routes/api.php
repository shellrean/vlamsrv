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

Route::post('/login', 'Auth\LoginController@login');
Route::group(['middleware' => 'auth.api', 'namespace' => 'Api\v2','prefix' => 'v2'], function() {
    // Route::get('logout', 'AuthController@logout');
    Route::get('ujian', 'UjianController@index');
});

Route::post('/v2/pusat/sinkron', 'API\v2\PusatController@sinkron');