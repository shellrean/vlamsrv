<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matpel extends Model
{
    protected $guarded = [];

    protected $casts = [
    	'jurusan_id' => 'array'
    ];
}
