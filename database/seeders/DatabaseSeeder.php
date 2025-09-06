<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            HeroSectionSeeder::class,
            PersonalInformationSeeder::class,
            SkillSeeder::class,
            ExperienceSeeder::class,
            PortfolioTypeSeeder::class,
            PortfolioSeeder::class,
            PortfolioDetailImageSeeder::class,
            ServiceSeeder::class,
            SectionOverviewContentSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Portfolio Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'), // password
            'email_verified_at' => now(),
            'remember_token' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        

    }
}
