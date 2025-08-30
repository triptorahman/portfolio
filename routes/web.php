<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HeroSectionController;
use App\Http\Controllers\PersonalInformationController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\PortfolioTypeController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\HeroSection;
use App\Models\PersonalInformation;
use App\Models\User;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\PortfolioType;

Route::get('/', function () {
    return Inertia::render('index', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'heroSections' => HeroSection::orderBy('sort_order', 'asc')->get(),
        'personalInformation' => PersonalInformation::first(),
        'userInformation' => User::select('name', 'email')->first(),
        'skill' => Skill::orderBy('sort_order', 'asc')->get(),
        'experiences' => Experience::where('status','active')->orderBy('sort_order', 'asc')->get(),
        'canCreateAccount' => false, // Disable registration
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('hero-sections', HeroSectionController::class);
    Route::resource('personal-information', PersonalInformationController::class);
    Route::resource('skills', SkillController::class);
    Route::resource('experiences', ExperienceController::class);
    Route::resource('portfolio-types', PortfolioTypeController::class);
    Route::resource('portfolios', PortfolioController::class);
});

require __DIR__.'/auth.php';
