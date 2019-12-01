<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Jadwal;
use App\SiswaUjian;
use Carbon\Carbon;

use App\Http\Resources\AppCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UjianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ujian = Jadwal::with(['banksoal','banksoal.matpel']);
        if (request()->q != '') {
            $ujian = $ujian->where('token', 'LIKE', '%'. request()->q.'%');
        }

        $ujian = $ujian->paginate(10);
        return new AppCollection($ujian);
    }

    /**
     * Change token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function changeToken(Request $request)
    {
        $jadwal = Jadwal::find($request->id);
        $jadwal->token = strtoupper(Str::random(6));
        $jadwal->save();

        return response()->json(['data' => $jadwal]);
    }

    /**
     * Get peserta.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getPeserta($id)
    {
        $siswa = SiswaUjian::with('peserta')->where(['jadwal_id' => $id])->get();

        return response()->json(['data' => $siswa]);
    }

    /**
     * Get all peserta.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function pesertaAll()
    {
        $siswa = SiswaUjian::with('peserta')->whereDate('created_at', Carbon::today())->get();
        return response()->json(['data' => $siswa]);
    }
}
