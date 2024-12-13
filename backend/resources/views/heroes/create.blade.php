<!-- resources/views/heroes/create.blade.php -->
@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Create New Hero</h1>

        <form action="{{ route('heroes.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" value="{{ old('title') }}" required>
            </div>

            <div class="form-group">
                <label for="file">File</label>
                <input type="file" class="form-control" id="file" name="file" required>
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" name="description">{{ old('description') }}</textarea>
            </div>

            <div class="form-group">
                <label for="url">URL</label>
                <input type="url" class="form-control" id="url" name="url" value="{{ old('url') }}">
            </div>

            <button type="submit" class="btn btn-primary mt-3">Create Hero</button>
        </form>
    </div>
@endsection
