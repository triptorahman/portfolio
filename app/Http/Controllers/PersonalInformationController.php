<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PersonalInformation;
use App\Http\Services\FileUploadService;


class PersonalInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PersonalInformation/edit', [
            'personalInformation' => PersonalInformation::first(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'hero_banner_image_url' => 'nullable|image|max:2048',
            'profile_image_url' => 'nullable|image|max:2048',
            'github_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'whatsapp_url' => 'nullable|url',
            'skype_url' => 'nullable|url',
            'website_url' => 'nullable|url',
            'phone_number' => ['nullable', 'string', 'max:20', 'regex:/^\+?[0-9\-()\s]+$/'],
            'email' => 'nullable|email|max:255',
            'degree' => 'nullable|max:255',
            'address' => 'nullable|string|max:1000',
            'map_url' => 'nullable|url',
            'freelance' => 'required|in:Available,Unavailable',
            'cv_url' => 'nullable|file|mimes:pdf|max:2048',
        ], [], [
            'hero_banner_image_url' => 'Hero Banner Image',
            'profile_image_url' => 'Profile Image',
            'github_url' => 'GitHub URL',
            'linkedin_url' => 'LinkedIn URL',
            'whatsapp_url' => 'WhatsApp URL',
            'skype_url' => 'Skype URL',
            'website_url' => 'Website URL',
            'phone_number' => 'Phone Number',
            'email' => 'Email Address',
            'degree' => 'Degree',
            'address' => 'Address',
            'map_url' => 'Map URL',
            'freelance' => 'Freelance Status',
            'cv_url' => 'CV File',
        ]);

        $fileUploadService = new FileUploadService();
        $personalInformation = PersonalInformation::first();

        if ($request->hasFile('hero_banner_image_url')) {

            $fileUploadService->deleteFile($personalInformation->hero_banner_image_url);
            $validated['hero_banner_image_url'] = $fileUploadService->saveFile($request->file('hero_banner_image_url'), 'personal-info');
        } else {

            $validated['hero_banner_image_url'] = $personalInformation->hero_banner_image_url;
        }

        if ($request->hasFile('profile_image_url')) {
            $fileUploadService->deleteFile($personalInformation->profile_image_url);
            $validated['profile_image_url'] = $fileUploadService->saveFile($request->file('profile_image_url'), 'personal-info');
        } else {
            $validated['profile_image_url'] = $personalInformation->profile_image_url;
        }

        if ($request->hasFile('cv_url')) {
            $fileUploadService->deleteFile($personalInformation->cv_url);
            $validated['cv_url'] = $fileUploadService->saveFile($request->file('cv_url'), 'personal-info');
        } else {
            $validated['cv_url'] = $personalInformation->cv_url;
        }

        $personalInformation->update($validated);

        return redirect()->route('personal-information.index')->with('success', 'Personal information updated successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit() {}

    /**
     * Update the specified resource in storage.
     */


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
