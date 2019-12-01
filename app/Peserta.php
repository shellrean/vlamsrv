<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    protected $fillable = [
		'no_ujian','nama','password'
	];

    protected $hidden = [
    	'api_token','password'
    ];
}
