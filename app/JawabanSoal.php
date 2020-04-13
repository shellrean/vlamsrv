<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JawabanSoal extends Model
{
    protected $guarded = [];

    public function getTextJawabanAttribute($value)
    {
    	return str_replace('https://siwalidi.info', 'http://'.$_SERVER['SERVER_ADDR'], $value);
    }
}
