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
            array('id' => '1', 'hero_banner_image_url' => null, 'github_url' => 'https://github.com/test', 'linkedin_url' => 'https://www.linkedin.com/in/test/', 'whatsapp_url' => 'https://wa.me/test', 'skype_url' => NULL, 'profile_image_url' => NULL, 'website_url' => NULL, 'phone_number' => '012345678910', 'email' => 'admin@gmail.com', 'degree' => 'Bsc in CSE', 'address' => 'Bangladesh', 'freelance' => 'Available', 'cv_url' => NULL, 'map_url' => 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Rampura%20Bangladesh&t=&z=14&ie=UTF8&iwloc=B&output=embed', 'created_at' => '2025-08-02 12:34:55', 'updated_at' => '2025-08-03 09:13:59')
        );
        DB::table('personal_information')->insert($personal_information);
    }
}
