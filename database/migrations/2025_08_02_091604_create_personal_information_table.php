<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_information', function (Blueprint $table) {
            $table->id();
            $table->string('hero_banner_image_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('whatsapp_url')->nullable();
            $table->string('skype_url')->nullable();
            $table->string('profile_image_url')->nullable();
            $table->string('website_url')->nullable();
            $table->string('cv_url')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->string('degree')->nullable();
            $table->string('address')->nullable();
            $table->string('map_url')->nullable();
            $table->enum('freelance', ['Available', 'Unavailble'])->default('Available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_information');
    }
};
