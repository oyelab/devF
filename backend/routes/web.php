<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\AssetController;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/api/hero', [HeroController::class, 'index']);
Route::get('/api/heroes/{hero:id}', [HeroController::class, 'show']);
Route::resource('heroes', HeroController::class);