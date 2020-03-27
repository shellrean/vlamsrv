<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    protected $guarded = [];

    protected $appends = [
        'banksoal'
    ];

    protected $hidden = [
        'banksoal','created_at','updated_at','ids','token'
    ];

    protected $casts = [
        'ids' => 'array'
    ];

    public function banksoal() 
    {
    	return $this->hasOne('App\Banksoal','id','banksoal_id');
    }

    public function getBanksoalAttribute()
    {
        $ids = array_column($this->ids, 'id');
        $banksoal = Banksoal::whereIn('id', $ids)->get();
        return $banksoal;
    }
}
