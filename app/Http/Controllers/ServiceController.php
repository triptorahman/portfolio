<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('sort_order', 'asc')->get();

        return Inertia::render('Services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Services/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:services,title',
            'icon' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'sort_order' => 'required|numeric|min:1|unique:services,sort_order',
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'icon' => 'Icon',
            'short_description' => 'Short Description',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'icon', 'short_description', 'sort_order', 'status']);

        
        Service::create($data);

        return redirect()->route('services.index')->with('success', 'Service created successfully.');
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
    public function edit(Service $service)
    {
        return Inertia::render('Services/edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('services', 'title')->ignore($service->id),
            ],
            'icon' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'sort_order' => [
                'required',
                'numeric',
                'min:1',
                Rule::unique('services', 'sort_order')->ignore($service->id),
            ],
            'status' => 'required|in:active,inactive',
        ], [], [
            'title' => 'Title',
            'icon' => 'Icon',
            'short_description' => 'Short Description',
            'sort_order' => 'Sort Order',
            'status' => 'Status',
        ]);

        $data = $request->only(['title', 'icon', 'short_description', 'sort_order', 'status']);
        $service->update($data);

        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('services.index')->with('success', 'Service deleted successfully.');
    }
}
