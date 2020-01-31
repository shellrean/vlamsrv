<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Jadwal;
use App\SiswaUjian;
use Carbon\Carbon;
use App\Peserta;
use App\UjianAktif;
use App\JawabanPeserta;
use App\HasilUjian;

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
        $jadwal = UjianAktif::first();
        $jadwal->token = strtoupper(Str::random(6));
        $jadwal->status_token = 0;
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
        $ujian = UjianAktif::first();
        $siswa = SiswaUjian::with('peserta')->whereDate('created_at', Carbon::today())->get();
        return response()->json(['data' => $siswa]);
    }

    /**
     * Reset peserta
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response
     */
    public function resetPeserta(Request $request)
    {
        $siswa = Peserta::find($request->id);
        $siswa->api_token = '';
        $siswa->save();

        return response()->json(['status' => 'reseted']);
    }

    /**
     * Reset peserta
     *
     * @param \Illuminate\Http\Response
     */
    public function ujianAktif()
    {
        $ujian = UjianAktif::with(['jadwal'])->first();
        
        if($ujian) {
            $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', now());
            $from = $ujian['updated_at']->format('Y-m-d H:i:s');
            $differ = $to->diffInSeconds($from);

            if($differ > 900) {
                $ujian->token = strtoupper(Str::random(6));
                $ujian->status_token = 0;
                $ujian->save();
            }  
        }

        return response()->json(['data' => $ujian]);
    }

    /**
     * Kelompok 
     *
     * @param \Illuminate\Http\Response
     */
    public function kelompok(Request $request)
    {
        $ujian = UjianAktif::first();
        $siswa = SiswaUjian::where(['status_ujian' => 3])->first();
        if($siswa) {
            return response()->json(['status' => 'ERR']);
        }
        if($ujian) {
            $ujian->kelompok = $request->kelompok;
            $ujian->save();

            return response()->json(['status' => "OK"]);
        }

        UjianAktif::create([
            'kelompok'  => $request->kelompok,
            'token'     => strtoupper(Str::random(6))
        ]);

        return response()->json(['status' => 'OK']);
    }

    /**
     * Ubah test
     *
     * @param \Illuminate\Http\Response
     */
    public function ubahTest(Request $request)
    {
        $ujian = UjianAktif::first();
        $siswa = SiswaUjian::where(['status_ujian' => 3])->first();
        if($siswa) {
            return response()->json(['status' => 'ERR']);
        }
        if($ujian) {
            $ujian->ujian_id = $request->jadwal;
            $ujian->save();

            return response()->json(['status' => "OK"]);
        }

        UjianAktif::create([
            'kelompok'  => $request->jadwal,
            'token'     => strtoupper(Str::random(6))
        ]);

        return response()->json(['status' => 'OK']);
    }

    /**
     * Relese token
     *
     * @param \Illuminate\Http\Response
     */
    public function rilisToken(Request $request)
    {
        $ujian = UjianAktif::first();
        if($ujian) {
            $ujian->token = $request->token;
            $ujian->status_token = 1;
            $ujian->save();

            return response()->json(['status' => "OK"]);
        }

        UjianAktif::create([
            'token'  => $request->token,
        ]);

        return response()->json(['status' => 'OK']);
    }

    /**
     *
     * @param \Illuminate\Http\Response
     */
    public function simpanStatus(Request $request)
    {
        $ujian = UjianAktif::first();
        $siswa = SiswaUjian::where(['status_ujian' => 3])->first();
        if($siswa) {
            return response()->json(['status' => 'ERR']);
        }
        if($ujian) {
            $ujian->ujian_id = $request->jadwal;
            $ujian->kelompok = $request->kelompok;
            $ujian->save();

            return response()->json(['status' => "OK"]);
        }

        UjianAktif::create([
            'kelompok'  => $request->kelompok,
            'ujian_id'    => $request->jadwal,
            'token'     => strtoupper(Str::random(6))
        ]);

        return response()->json(['status' => 'OK']);
    }

    /**
     *  
     */
    public function forceClose(Request $request)
    {
        $aktif = UjianAktif::first();

        $ujian = SiswaUjian::where([
            'jadwal_id'     => $aktif->ujian_id, 
            'peserta_id'    => $request->peserta_id
        ])->first();

        $ujian->status_ujian = 1;
        $ujian->save();

        $salah = JawabanPeserta::where([
            'iscorrect'     => 0,
            'jadwal_id'     => $aktif->ujian_id, 
            'peserta_id'    => $request->peserta_id,
            'jawab_essy'    => null
        ])->get()->count();

        $benar = JawabanPeserta::where([
            'iscorrect'     => 1,
            'jadwal_id'     => $aktif->ujian_id, 
            'peserta_id'    => $request->peserta_id
        ])->get()->count();
        
        $jml = JawabanPeserta::where([
            'jadwal_id'     => $aktif->ujian_id, 
            'peserta_id'    => $request->peserta_id
        ])->get()->count();

        $hasil = ($benar/$jml)*100;

        HasilUjian::create([
            'peserta_id'      => $request->peserta_id,
            'jadwal_id'       => $aktif->ujian_id,
            'jumlah_salah'    => $salah,
            'jumlah_benar'    => $benar,
            'tidak_diisi'     => 0,
            'hasil'           => $hasil,
        ]);

        return response()->json(['status' => 'finished']);
    }

}
