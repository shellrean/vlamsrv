<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    protected $fillable = [
		'banksoal_id','pertanyaan','tipe_soal'
	];

	public function banksoal()
	{
		return $this->belongsTo('App\Banksoal','banksoal_id');
	}
    
    public function jawabans()
    {
    	return $this->hasMany('App\JawabanSoal', 'soal_id','id');
    }
}
