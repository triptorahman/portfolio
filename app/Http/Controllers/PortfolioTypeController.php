<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\PortfolioType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PortfolioTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolio_types = PortfolioType::orderBy('sort_order', 'asc')->get();

        return Inertia::render('PortfolioTypes/index', [
            'portfolio_types' => $portfolio_types,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PortfolioTypes/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:portfolio_types,title',
            'sort_order' => 'required|numeric|min:1|unique:portfolio_types,sort_order',
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'sort_order', 'status']);

        
        PortfolioType::create($data);

        return redirect()->route('portfolio-types.index')->with('success', 'PortfolioType created successfully.');
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
    public function edit(PortfolioType $portfolio_type)
    {
        return Inertia::render('PortfolioTypes/edit', [
            'portfolio_type' => $portfolio_type,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PortfolioType $portfolio_type)
    {
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('portfolio_types', 'title')->ignore($portfolio_type->id),
            ],
            'sort_order' => [
                'required',
                'numeric',
                'min:1',
                Rule::unique('portfolio_types', 'sort_order')->ignore($portfolio_type->id),
            ],
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'sort_order', 'status']);
        $portfolio_type->update($data);

        return redirect()->route('portfolio-types.index')->with('success', 'PortfolioType updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PortfolioType $skill)
    {
        $skill->delete();

        return redirect()->route('portfolio-types.index')->with('success', 'PortfolioType deleted successfully.');
    }
}
