<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\PersonalInformation;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Md Samiur Rahman',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'), // password
            'email_verified_at' => now(),
            'remember_token' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        PersonalInformation::factory()->create([   
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }
}
