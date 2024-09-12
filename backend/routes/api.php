<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/users', function(){
    return User::all();
});

Route::post('/user', function(Request $request){
    return $request->validate([
        'firstName' => 'required',
        'lastName' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required',
    ],[
        'firstName.required' => 'O campo nome é obrigatório',
        'lastName.required' => 'O campo sobrenome é obrigatório',
        'email.unique' => 'Esse e-mail já está sendo utilizado',
        'password.required' => 'O campo senha é obrigatório',
    ]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
