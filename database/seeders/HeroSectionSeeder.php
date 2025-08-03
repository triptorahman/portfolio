<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hero_sections = array(
            array('id' => '1', 'title' => 'Software Engineer', 'sort_order' => '1', 'status' => 'active', 'created_at' => '2025-08-03 07:49:44', 'updated_at' => '2025-08-03 07:49:44'),
            array('id' => '2', 'title' => 'Back-end Developer', 'sort_order' => '2', 'status' => 'active', 'created_at' => '2025-08-03 07:50:04', 'updated_at' => '2025-08-03 07:50:04'),
            array('id' => '3', 'title' => 'Full-stack Developer', 'sort_order' => '3', 'status' => 'active', 'created_at' => '2025-08-03 07:50:18', 'updated_at' => '2025-08-03 07:50:18')
        );
        DB::table('hero_sections')->insert($hero_sections);
    }
}
