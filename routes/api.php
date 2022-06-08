<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/people', 'IndexController@index');

Route::group(['namespace'=>'Person', 'prefix'=>'people'], function(){
    Route::post('/','StoreController');
    Route::get('/','IndexController');
    Route::get('/{id}','ShowController');
    Route::patch('/{person}','UpdateController');
    Route::delete('/{person}','DeleteController');
});

Route::group(['namespace'=>'More', 'prefix'=>'more'], function(){
    Route::post('/','IndexController');
    Route::group(['namespace'=>'Some','prefix'=>'some'], function(){
    Route::get('/','IndexController');
    });
});

// Route::post('/people', 'IndexController@index');