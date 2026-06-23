<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private function attemptLogin(Request $request, string $role)
    {
        $request->validate([
            'nim' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('nim', $request->nim)
                    ->where('role', $role)
                    ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'NIM atau password salah'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'nim' => $user->nim,
                'role' => $user->role,
            ]
        ]);
    }

    public function loginMahasiswa(Request $request)
    {
        return $this->attemptLogin($request, 'mahasiswa');
    }

    public function loginAdmin(Request $request)
    {
        return $this->attemptLogin($request, 'admin');
    }

    public function loginPic(Request $request)
    {
        return $this->attemptLogin($request, 'pic');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logout berhasil'
        ]);
    }

    public function me(Request $request)
    {
        return response()->json($request->user());
    }
}