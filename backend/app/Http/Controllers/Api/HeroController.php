<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Hero;
use Illuminate\Support\Facades\Storage;


class HeroController extends Controller
{
	public function show($id)
    {
        // Fetch the hero by ID
        $hero = Hero::find($id);
		// return $hero;

        if ($hero) {
            // Generate the full URL for the image stored in the 'assets' field
            $hero->image_url = asset('storage/heroes/' . $hero->file); // Adjust path if necessary
        }

        return response()->json($hero); // Return the hero data as JSON
    }
	
	public function index()
	{
		$hero = Hero::latest()->first(); // Fetch the latest hero data

		// Check if the hero data exists
		if ($hero) {
			// Generate the full URL for the image stored in the 'assets' field
			$hero->image_url = asset('storage/heroes/' . $hero->file); // Adjust path if necessary
		}

		return response()->json($hero); // Return the latest hero data as JSON
	}


    public function create()
    {
        return view('heroes.create');
    }

    public function store(Request $request)
	{
		$request->validate([
			'title' => 'required|string|max:255',
			'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
			'description' => 'nullable|string|max:255',
			'url' => 'nullable|url|max:255',
		]);

		// Handle file upload and store only the file name
		$fileName = $request->file('file')->getClientOriginalName();
		$request->file('file')->storeAs('heroes', $fileName, 'public');

		// Create the hero and save the file name to the database
		Hero::create([
			'title' => $request->title,
			'file' => $fileName, // Store only the file name
			'description' => $request->description,
			'url' => $request->url,
		]);

		return redirect()->route('heroes.index')->with('success', 'Info created successfully.');
	}


    public function edit(Hero $hero)
    {
        return view('heroes.edit', compact('hero'));
    }

	public function update(Request $request, Hero $hero)
	{
		$request->validate([
			'title' => 'required|string|max:255',
			'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
			'description' => 'nullable|string|max:255',
			'url' => 'nullable|url|max:255',
		]);
	
		// Check if a new file file is uploaded
		if ($request->hasFile('file')) {
			// Delete the old file if exists
			Storage::delete('public/heroes/' . $hero->file);
	
			// Get the new file's original name (you can also rename it if necessary)
			$fileName = $request->file('file')->getClientOriginalName();
	
			// Store the new file file and save only the filename (not the full path)
			$request->file('file')->storeAs('heroes', $fileName, 'public');
	
			// Update the hero's file field with the new filename (not the full path)
			$hero->file = $fileName;
		}
	
		// Update other hero details
		$hero->update([
			'title' => $request->title,
			'description' => $request->description,
			'url' => $request->url,
		]);
	
		return redirect()->route('heroes.index')->with('success', 'Info updated successfully.');
	}
	

    public function destroy(Hero $hero)
    {
        $hero->delete();
        return redirect()->route('heroes.index')->with('success', 'Info deleted successfully.');
    }
}
