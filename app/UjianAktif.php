<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UjianAktif extends Model
{
	protected $table = 'ujian_aktif';
    protected $fillable = ['kelompok','ujian_id','token','status_token'];

 	public function jadwal()
    {
    	return $this->belongsTo('App\Jadwal','ujian_id','id');
    }
}
