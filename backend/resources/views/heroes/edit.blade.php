<!-- resources/views/heroes/edit.blade.php -->
@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Edit Hero</h1>

        <form action="{{ route('heroes.update', $hero) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" value="{{ old('title', $hero->title) }}" required>
            </div>

            <div class="form-group">
                <label for="file">File</label>
                <input type="file" class="form-control" id="file" name="file">
                <img src="{{ asset('storage/heroes/' . $hero->file) }}" width="100" alt="Current File" class="mt-2">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" name="description">{{ old('description', $hero->description) }}</textarea>
            </div>

            <div class="form-group">
                <label for="url">URL</label>
                <input type="url" class="form-control" id="url" name="url" value="{{ old('url', $hero->url) }}">
            </div>

            <button type="submit" class="btn btn-primary mt-3">Update Hero</button>
        </form>
    </div>
@endsection
