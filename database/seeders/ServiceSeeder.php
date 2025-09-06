<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = array(
            array('id' => '1', 'title' => 'Web Design', 'icon' => 'bi bi-palette', 'sort_order' => '1', 'short_description' => 'Professional web design services for modern and responsive websites.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '2', 'title' => 'E-commerce Development', 'icon' => 'bi bi-cart', 'sort_order' => '2', 'short_description' => 'Custom e-commerce solutions with secure payment integration.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '3', 'title' => 'Mobile App Development', 'icon' => 'bi bi-phone', 'sort_order' => '3', 'short_description' => 'Cross-platform mobile app development for iOS and Android.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '4', 'title' => 'SEO Optimization', 'icon' => 'bi bi-search', 'sort_order' => '4', 'short_description' => 'Improve your website ranking with expert SEO services.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '5', 'title' => 'UI/UX Consulting', 'icon' => 'bi bi-lightbulb', 'sort_order' => '5', 'short_description' => 'Enhance user experience with professional UI/UX consulting.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()),
            array('id' => '6', 'title' => 'Custom Software Solutions', 'icon' => 'bi bi-cpu', 'sort_order' => '6', 'short_description' => 'Tailored software solutions to meet your business needs.', 'status' => 'active', 'created_at' => now(), 'updated_at' => now())
        );
        DB::table('services')->insert($services);
    }
}
