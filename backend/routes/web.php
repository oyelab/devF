<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HeroController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/hero', [HeroController::class, 'index']);
