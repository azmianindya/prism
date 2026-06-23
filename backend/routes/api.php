<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login/mahasiswa', [AuthController::class, 'loginMahasiswa']);
Route::post('/login/admin', [AuthController::class, 'loginAdmin']);
Route::post('/login/pic', [AuthController::class, 'loginPic']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});