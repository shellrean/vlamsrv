<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Peserta extends Model
{
	public $timestamps = false;
	
	protected $dates = [];
	
    protected $guarded = [];

    protected $hidden = [
    	'api_token','password','created_at','udpated_at'
    ];
}
