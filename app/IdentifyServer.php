<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentifyServer extends Model
{
    protected $table = 'identify_server';

    protected $fillable = [
    	'kode_server','serial_number','isregister'
    ];
}
