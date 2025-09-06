<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SectionOverviewContent;
use App\Http\Services\FileUploadService;


class SectionOverviewContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SectionOverviewContent/edit', [
            'sectionOverviewContent' => SectionOverviewContent::first(),
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
            'about_first' => 'nullable|string|max:1000',
            'about_middle' => 'nullable|string|max:1000',
            'about_last' => 'nullable|string|max:1000',
            'skill' => 'nullable|string|max:1000',
            'resume' => 'nullable|string|max:1000',
            'portfolio' => 'nullable|string|max:1000',
            'service' => 'nullable|string|max:1000',
            'contact' => 'nullable|string|max:1000',
        ], [], [
            'about_first' => 'About (First)',
            'about_middle' => 'About (Middle)',
            'about_last' => 'About (Last)',
            'skill' => 'Skill',
            'resume' => 'Resume',
            'portfolio' => 'Portfolio',
            'service' => 'Service',
            'contact' => 'Contact',
        ]);

        $sectionOverviewContent = SectionOverviewContent::first();
        
        if ($sectionOverviewContent) {
            $sectionOverviewContent->update($validated);
        } else {
            SectionOverviewContent::create($validated);
        }

        return redirect()->route('section-overview-content.index')->with('success', 'Section Overview Content updated successfully.');
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
