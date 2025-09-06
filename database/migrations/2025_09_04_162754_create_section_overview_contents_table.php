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
        Schema::create('section_overview_contents', function (Blueprint $table) {
            $table->id();
            $table->text('about_first')->nullable();
            $table->text('about_middle')->nullable();
            $table->text('about_last')->nullable();
            $table->text('skill')->nullable();
            $table->text('resume')->nullable();
            $table->text('portfolio')->nullable();
            $table->text('service')->nullable();
            $table->text('contact')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_overview_contents');
    }
};
