<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PortfolioTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $portfolio_types = array(
            array('id' => '1', 'title' => 'Website [Laravel & React]', 'sort_order' => '1', 'status' => 'active', 'created_at' => '2025-08-28 16:39:27', 'updated_at' => '2025-08-28 16:51:49'),
            array('id' => '2', 'title' => 'Website [Laravel & Blade]', 'sort_order' => '2', 'status' => 'active', 'created_at' => '2025-08-28 16:52:07', 'updated_at' => '2025-08-28 16:52:07'),
            array('id' => '3', 'title' => 'Web Application', 'sort_order' => '3', 'status' => 'active', 'created_at' => '2025-08-28 16:52:25', 'updated_at' => '2025-08-28 16:52:25')
        );
        DB::table('portfolio_types')->insert($portfolio_types);
    }
}
