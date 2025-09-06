<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $experiences = array(
            array('id' => '1', 'designation' => 'Frontend Developer', 'duration' => 'Jan 2022 - Dec 2022', 'company_name' => 'Demo Tech Ltd.', 'company_address' => 'Dhanmondi, Dhaka, Bangladesh', 'work_description' => '<ul><li>• Built responsive web interfaces using React and Vue.js.</li><li>• Collaborated with designers to implement UI/UX improvements.</li></ul>', 'sort_order' => '1', 'status' => 'active', 'created_at' => '2025-08-05 15:33:49', 'updated_at' => '2025-08-05 15:33:49'),
            array('id' => '2', 'designation' => 'Backend Developer', 'duration' => 'Feb 2021 - Dec 2021', 'company_name' => 'Sample Solutions', 'company_address' => 'Uttara, Dhaka, Bangladesh', 'work_description' => '<ul><li>• Developed RESTful APIs with Laravel and Node.js.</li><li>• Optimized database queries for performance.</li></ul>', 'sort_order' => '2', 'status' => 'active', 'created_at' => '2025-08-05 15:38:15', 'updated_at' => '2025-08-05 15:38:15'),
            array('id' => '3', 'designation' => 'Intern', 'duration' => 'Jun 2020 - Jan 2021', 'company_name' => 'Test IT Firm', 'company_address' => 'Mirpur, Dhaka, Bangladesh', 'work_description' => '<ul><li>• Assisted in software testing and documentation.</li><li>• Learned basic PHP and MySQL development.</li></ul>', 'sort_order' => '3', 'status' => 'active', 'created_at' => '2025-08-05 15:39:32', 'updated_at' => '2025-08-05 15:39:32')
        );
        DB::table('experiences')->insert($experiences);
    }
}
