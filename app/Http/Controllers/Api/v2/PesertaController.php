<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Peserta;
use App\Http\Resources\AppCollection;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $peserta = Peserta::orderBy('no_ujian');
        if (request()->q != '') {
            $peserta = $peserta->where('nama', 'LIKE', '%'.request()->q.'%');
        }

        $peserta = $peserta->paginate(30);
        return new AppCollection($peserta);
    }

    /**
     * Display peserta with token not equal with ''
     * 
     * @return \Illuminate\Http\Response
     */
    public function pesertaLogin()
    {
        $peserta = Peserta::orderBy('no_ujian');
        $peserta->where('api_token','!=','');
        if (request()->q != '') {
            $peserta = $peserta->where('nama', 'LIKE', '%'.request()->q.'%');
        }

        $peserta = $peserta->paginate(30);
        return new AppCollection($peserta);
    }
}
