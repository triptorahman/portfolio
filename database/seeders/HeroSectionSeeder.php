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
            array('id' => '1', 'title' => 'Web Designer', 'sort_order' => '1', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '2', 'title' => 'Mobile App Developer', 'sort_order' => '2', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '3', 'title' => 'UI/UX Specialist', 'sort_order' => '3', 'status' => 'active', 'created_at' => now(), 'updated_at' => now())
        );
        DB::table('hero_sections')->insert($hero_sections);
    }
}
