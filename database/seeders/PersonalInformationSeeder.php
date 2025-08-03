<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonalInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $personal_information = array(
            array('id' => '1', 'hero_banner_image_url' => 'personal-info/md-samiur-rahman-20250802150357-iS8dpg.jpg', 'github_url' => 'https://github.com/triptorahman', 'linkedin_url' => 'https://www.linkedin.com/in/samiur-rahman-tripto/', 'whatsapp_url' => 'https://wa.me/8801714491616', 'skype_url' => NULL, 'profile_image_url' => 'personal-info/md-samiur-rahman-20250802150357-VKaTO5.jpg', 'website_url' => 'http://samiurrahman.xyz/', 'phone_number' => '+8801714491616', 'email' => 'triptorahman@gmail.com', 'degree' => 'Bsc in CSE', 'address' => 'Rampura, Dhaka, Bangladesh', 'freelance' => 'Available', 'created_at' => '2025-08-02 12:34:55', 'updated_at' => '2025-08-03 09:13:59')
        );
        DB::table('personal_information')->insert($personal_information);
    }
}
