<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SectionOverviewContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $section_overview_contents = array(
            array('id' => '1', 'about_first' => 'I am John Doe, a passionate Web Developer with experience in building modern websites and applications.', 'about_middle' => 'I love working with new technologies and creating user-friendly interfaces.', 'about_last' => 'Always eager to learn and take on new challenges in the tech world.', 'skill' => 'Skilled in HTML, CSS, JavaScript, React, and PHP. Experienced with Laravel and Node.js.', 'resume' => 'Web Developer with a strong background in both frontend and backend development. Proven ability to deliver high-quality projects on time.', 'portfolio' => 'Explore my portfolio to see a variety of web projects, including e-commerce sites, landing pages, and mobile apps.', 'service' => 'Offering web development, UI/UX design, and custom software solutions for businesses of all sizes.', 'contact' => 'Feel free to reach out for collaborations, freelance work, or any questions about my services.', 'created_at' => now(), 'updated_at' => now())
        );

        DB::table('section_overview_contents')->insert($section_overview_contents);
    }
}
