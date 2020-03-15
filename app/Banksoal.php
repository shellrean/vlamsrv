<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banksoal extends Model
{
    protected $guarded = [];

    public function pertanyaans()
    {
    	return $this->hasMany('App\Soal', 'banksoal_id','id');
    }

    public function matpel()
    {
    	return $this->belongsTo('App\Matpel','matpel_id');
    }

    public function user()
    {
    	return $this->belongsTo('App\User','author');
    }
}
