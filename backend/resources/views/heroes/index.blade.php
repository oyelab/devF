<!-- resources/views/heroes/index.blade.php -->
@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>heroes</h1>
        <a href="{{ route('heroes.create') }}" class="btn btn-primary">Add New Hero</a>

        <table class="table mt-4">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>File</th>
                    <th>Description</th>
                    <th>URL</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($heroes as $hero)
                    <tr>
                        <td>{{ $hero->title }}</td>
                        <td><img src="{{ asset('storage/heroes/' . $hero->file) }}" alt="{{ $hero->title }}" width="50"></td>
                        <td>{{ $hero->description }}</td>
                        <td><a href="{{ $hero->url }}" target="_blank">{{ $hero->url }}</a></td>
                        <td>
                            <a href="{{ route('heroes.edit', $hero) }}" class="btn btn-warning">Edit</a>

                            <form action="{{ route('heroes.destroy', $hero) }}" method="POST" style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
