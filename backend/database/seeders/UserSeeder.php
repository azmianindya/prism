<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Admin
        User::create([
            'name' => 'Admin 1',
            'nim' => 'admin001',
            'email' => 'admin@prism.com',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

        // Mahasiswa
        User::create([
            'name' => 'ahmad',
            'nim' => '23819219',
            'email' => 'ahmad@prism.com',
            'password' => Hash::make('password123'),
            'role' => 'mahasiswa',
        ]);

        // PIC
        User::create([
            'name' => 'PIC 1',
            'nim' => 'pic001',
            'email' => 'pic@prism.com',
            'password' => Hash::make('password123'),
            'role' => 'pic',
        ]);
    }
}