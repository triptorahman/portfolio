<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $heroSections = HeroSection::orderBy('sort_order', 'asc')->get();

        return Inertia::render('HeroSections/index', [
            'heroSections' => $heroSections,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('HeroSections/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:hero_sections,title',
            'sort_order' => 'required|numeric|min:1|unique:hero_sections,sort_order',
            'status' => 'required',
        ]);

        $data = $request->only(['title', 'sort_order', 'status']);

        
        HeroSection::create($data);

        return redirect()->route('hero-sections.index')->with('success', 'Hero section created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HeroSection $heroSection)
    {
        return Inertia::render('HeroSections/edit', [
            'heroSection' => $heroSection,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HeroSection $heroSection)
    {
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('hero_sections', 'title')->ignore($heroSection->id),
            ],
            'sort_order' => [
                'required',
                'numeric',
                'min:1',
                Rule::unique('hero_sections', 'sort_order')->ignore($heroSection->id),
            ],
            'status' => 'required',
        ]);

        $data = $request->only(['title', 'sort_order', 'status']);
        $heroSection->update($data);

        return redirect()->route('hero-sections.index')->with('success', 'Hero section updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HeroSection $heroSection)
    {
        $heroSection->delete();

        return redirect()->route('hero-sections.index')->with('success', 'Hero section deleted.');
    }
}
