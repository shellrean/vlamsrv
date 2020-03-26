<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JawabanPeserta extends Model
{
    protected $guarded = [];

    protected $hidden = [
    	'iscorrect','created_at','updated_at'
    ];

    public function soal()
    {
    	return $this->belongsTo('App\Soal','soal_id');
    }
}
