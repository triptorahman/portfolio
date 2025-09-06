<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = array(
            array('id' => '1', 'title' => 'HTML/CSS', 'percentage' => '90', 'sort_order' => '1', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '2', 'title' => 'Bootstrap', 'percentage' => '85', 'sort_order' => '2', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '3', 'title' => 'JavaScript', 'percentage' => '80', 'sort_order' => '3', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '4', 'title' => 'PHP', 'percentage' => '75', 'sort_order' => '4', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '5', 'title' => 'Laravel', 'percentage' => '70', 'sort_order' => '5', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '6', 'title' => 'ReactJS', 'percentage' => '65', 'sort_order' => '6', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '7', 'title' => 'MySQL', 'percentage' => '80', 'sort_order' => '7', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '8', 'title' => 'Git', 'percentage' => '85', 'sort_order' => '8', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '9', 'title' => 'NodeJS', 'percentage' => '60', 'sort_order' => '9', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '10', 'title' => 'WordPress', 'percentage' => '50', 'sort_order' => '10', 'status' => 'active', 'created_at' => now(), 'updated_at' => now())
        );
        DB::table('skills')->insert($skills);
    }
}
