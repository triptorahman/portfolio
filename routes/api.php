<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ContactController;

Route::post('/contact', [ContactController::class, 'store']);


