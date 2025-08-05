<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experiences = Experience::orderBy('sort_order', 'asc')->get();

        return Inertia::render('Experiences/index', [
            'experiences' => $experiences,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Experiences/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'designation' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'company_address' => 'required|string|max:255',
            'work_description' => 'required|string',
            'sort_order' => 'required|integer|min:1|unique:experiences,sort_order',
            'status' => 'required|in:active,inactive',
        ], [], [
            'designation' => 'Designation',
            'duration' => 'Duration',
            'company_name' => 'Company Name',
            'company_address' => 'Company Address',
            'work_description' => 'Work Description',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only([
            'designation',
            'duration',
            'company_name',
            'company_address',
            'work_description',
            'sort_order',
            'status',
        ]);


        Experience::create($data);

        return redirect()->route('experiences.index')->with('success', 'Experience created successfully.');
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
    public function edit(Experience $experience)
    {
        return Inertia::render('Experiences/edit', [
            'experience' => $experience,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Experience $experience)
    {
        $request->validate([
            'designation' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'company_address' => 'required|string|max:255',
            'work_description' => 'required|string',
            'sort_order' => [
                'required',
                'integer',
                'min:1',
                Rule::unique('experiences', 'sort_order')->ignore($experience->id),
            ],
            'status' => 'required|in:active,inactive',
        ], [], [
            'designation' => 'Designation',
            'duration' => 'Duration',
            'company_name' => 'Company Name',
            'company_address' => 'Company Address',
            'work_description' => 'Work Description',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only([
            'designation',
            'duration',
            'company_name',
            'company_address',
            'work_description',
            'sort_order',
            'status',
        ]);

        $experience->update($data);

        return redirect()->route('experiences.index')->with('success', 'Experience updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Experience $experience)
    {
        $experience->delete();

        return redirect()->route('experiences.index')->with('success', 'Experience deleted successfully.');
    }
}
