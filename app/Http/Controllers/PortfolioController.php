<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Portfolio;
use App\Models\PortfolioType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Services\FileUploadService;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::with('portfolioType')->orderBy('sort_order', 'asc')->get();
        // dd($portfolios);
        return Inertia::render('Portfolios/index', [
            'portfolios' => $portfolios,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $portfolio_types = PortfolioType::where('status', 'active')->orderBy('sort_order', 'asc')->get();

        return Inertia::render('Portfolios/create', [
            'portfolio_types' => $portfolio_types,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:portfolios,title',
            'sort_order' => 'required|numeric|min:1|unique:portfolios,sort_order',
            'status' => 'required|in:active,inactive',
            'portfolio_type_id' => 'required',
            'short_description' => 'required|string|max:255',
            'client_name' => 'nullable|string|max:255',
            'project_url' => 'nullable|url|max:255',
            'description' => 'required|string',
            'image_url' => 'required|file|mimes:jpg,jpeg,png,svg|max:2048',
        ], [], [
            'title' => 'Title',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
            'portfolio_type_id' => 'Portfolio Type',
            'short_description' => 'Short Description',
            'client_name' => 'Client Name',
            'project_url' => 'Project URL',
            'description' => 'Description',
            'image_url' => 'Project Image',
        ]);

        $fileUploadService = new FileUploadService();

        $data = $request->only([
            'title',
            'sort_order',
            'status',
            'portfolio_type_id',
            'short_description',
            'client_name',
            'project_url',
            'description'
        ]);

        if ($request->hasFile('image_url')) {
            $data['image_url'] = $fileUploadService->saveFile($request->file('image_url'), 'portfolio');
        }

        Portfolio::create($data);

        return redirect()->route('portfolios.index')->with('success', 'Portfolio created successfully.');
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
    public function edit(Portfolio $portfolio)
    {
        $portfolio_types = PortfolioType::where('status', 'active')->orderBy('sort_order', 'asc')->get();

        return Inertia::render('Portfolios/edit', [
            'portfolio' => $portfolio,
            'portfolio_types' => $portfolio_types,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Portfolio $portfolio)
    {
        // dd($request->all());
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('portfolios', 'title')->ignore($portfolio->id),
            ],
            'sort_order' => [
                'required',
                'numeric',
                'min:1',
                Rule::unique('portfolios', 'sort_order')->ignore($portfolio->id),
            ],
            'status' => [
                'required',
                'in:active,inactive',
            ],
            'portfolio_type_id' => [
                'required',
            ],
            'short_description' => [
                'required',
                'string',
                'max:255',
            ],
            'client_name' => [
                'nullable',
                'string',
                'max:255',
            ],
            'project_url' => [
                'nullable',
                'url',
                'max:255',
            ],
            'description' => [
                'required',
                'string',
            ],
            'image_url' => [
                'nullable',
                'image',
                'max:2048',
            ],
        ], [], [
            'title' => 'Title',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
            'portfolio_type_id' => 'Portfolio Type',
            'short_description' => 'Short Description',
            'client_name' => 'Client Name',
            'project_url' => 'Project URL',
            'description' => 'Description',
            'image_url' => 'Project Image',
        ]);

        $fileUploadService = new FileUploadService();

        $data = $request->only([
            'title',
            'sort_order',
            'status',
            'portfolio_type_id',
            'short_description',
            'client_name',
            'project_url',
            'description'
        ]);

        if ($request->hasFile('image_url')) {

            $fileUploadService->deleteFile($portfolio->image_url);
            $data['image_url'] = $fileUploadService->saveFile($request->file('image_url'), 'portfolio');
        } else {

            $data['image_url'] = $portfolio->image_url;
        }

        $portfolio->update($data);

        return redirect()->route('portfolios.index')->with('success', 'Portfolio updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $portfolio)
    {
        $portfolio->delete();
        $fileUploadService = new FileUploadService();
        $fileUploadService->deleteFile($portfolio->image_url);

        return redirect()->route('portfolios.index')->with('success', 'Portfolio deleted successfully.');
    }
}
