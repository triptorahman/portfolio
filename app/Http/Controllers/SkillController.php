<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::orderBy('sort_order', 'asc')->get();

        return Inertia::render('Skills/index', [
            'skills' => $skills,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Skills/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:skills,title',
            'percentage' => 'required|numeric|min:1|max:100',
            'sort_order' => 'required|numeric|min:1|unique:skills,sort_order',
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'percentage' => 'Percentage',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'percentage', 'sort_order', 'status']);

        
        Skill::create($data);

        return redirect()->route('skills.index')->with('success', 'Skill created successfully.');
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
    public function edit(Skill $skill)
    {
        return Inertia::render('Skills/edit', [
            'skill' => $skill,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('skills', 'title')->ignore($skill->id),
            ],
            'percentage' => 'required|numeric|min:1|max:100',
            'sort_order' => [
                'required',
                'numeric',
                'min:1',
                Rule::unique('skills', 'sort_order')->ignore($skill->id),
            ],
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'percentage' => 'Percentage',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'percentage', 'sort_order', 'status']);
        $skill->update($data);

        return redirect()->route('skills.index')->with('success', 'Skill updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();

        return redirect()->route('skills.index')->with('success', 'Skill deleted successfully.');
    }
}
