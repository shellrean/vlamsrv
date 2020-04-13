<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
	protected $guarded = [];
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

    public function getPertanyaanAttribute($value)
    {
    	return str_replace('https://siwalidi.info', 'http://'.$_SERVER['SERVER_ADDR'], $value);
    }
}