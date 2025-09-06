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
            array('id' => '1', 'title' => 'Landing Page', 'sort_order' => '1', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '2', 'title' => 'E-commerce Website', 'sort_order' => '2', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '3', 'title' => 'Mobile App', 'sort_order' => '3', 'status' => 'active', 'created_at' => now(), 'updated_at' => now())
        );
        DB::table('portfolio_types')->insert($portfolio_types);
    }
}
