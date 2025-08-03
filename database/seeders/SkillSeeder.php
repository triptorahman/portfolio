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
            array('id' => '1', 'title' => 'HTML/CSS/Bootstrap', 'percentage' => '90', 'sort_order' => '1', 'status' => 'active', 'created_at' => '2025-08-03 10:49:19', 'updated_at' => '2025-08-03 14:04:08'),
            array('id' => '2', 'title' => 'Git', 'percentage' => '95', 'sort_order' => '10', 'status' => 'active', 'created_at' => '2025-08-03 10:57:46', 'updated_at' => '2025-08-03 14:20:21'),
            array('id' => '3', 'title' => 'PHP', 'percentage' => '90', 'sort_order' => '2', 'status' => 'active', 'created_at' => '2025-08-03 14:01:37', 'updated_at' => '2025-08-03 14:04:57'),
            array('id' => '4', 'title' => 'Laravel', 'percentage' => '90', 'sort_order' => '3', 'status' => 'active', 'created_at' => '2025-08-03 14:01:54', 'updated_at' => '2025-08-03 14:05:02'),
            array('id' => '5', 'title' => 'Javascript/jQuery', 'percentage' => '80', 'sort_order' => '4', 'status' => 'active', 'created_at' => '2025-08-03 14:02:44', 'updated_at' => '2025-08-03 14:05:26'),
            array('id' => '6', 'title' => 'Codeignator', 'percentage' => '70', 'sort_order' => '6', 'status' => 'active', 'created_at' => '2025-08-03 14:03:42', 'updated_at' => '2025-08-03 14:18:34'),
            array('id' => '7', 'title' => 'MySQL/MS Sql/Oracle', 'percentage' => '85', 'sort_order' => '5', 'status' => 'active', 'created_at' => '2025-08-03 14:05:51', 'updated_at' => '2025-08-03 14:05:51'),
            array('id' => '8', 'title' => 'ReactJS', 'percentage' => '70', 'sort_order' => '9', 'status' => 'active', 'created_at' => '2025-08-03 14:06:47', 'updated_at' => '2025-08-03 14:19:55'),
            array('id' => '9', 'title' => 'Docker', 'percentage' => '50', 'sort_order' => '11', 'status' => 'active', 'created_at' => '2025-08-03 14:07:13', 'updated_at' => '2025-08-03 14:20:34'),
            array('id' => '10', 'title' => 'OOP', 'percentage' => '90', 'sort_order' => '8', 'status' => 'active', 'created_at' => '2025-08-03 14:07:31', 'updated_at' => '2025-08-03 14:19:42'),
            array('id' => '11', 'title' => 'NodeJS', 'percentage' => '55', 'sort_order' => '12', 'status' => 'active', 'created_at' => '2025-08-03 14:07:52', 'updated_at' => '2025-08-03 14:07:52'),
            array('id' => '12', 'title' => 'Java Spring Boot', 'percentage' => '45', 'sort_order' => '13', 'status' => 'active', 'created_at' => '2025-08-03 14:08:09', 'updated_at' => '2025-08-03 14:08:09'),
            array('id' => '14', 'title' => 'CakePHP', 'percentage' => '70', 'sort_order' => '7', 'status' => 'active', 'created_at' => '2025-08-03 14:18:48', 'updated_at' => '2025-08-03 14:19:22'),
            array('id' => '15', 'title' => 'Wordpress', 'percentage' => '45', 'sort_order' => '14', 'status' => 'active', 'created_at' => '2025-08-03 14:23:40', 'updated_at' => '2025-08-03 14:23:40')
        );
        DB::table('skills')->insert($skills);
    }
}
