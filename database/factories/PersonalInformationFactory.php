<?php

namespace Database\Factories;

use App\Models\PersonalInformation;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonalInformationFactory extends Factory
{
    protected $model = PersonalInformation::class;

    public function definition(): array
    {
        return [
            'hero_banner_image_url' => null,
            'profile_image_url' => null,
            'github_url' => null,
            'linkedin_url' => null,
            'whatsapp_url' => null,
            'skype_url' => null,
        ];
    }
}
