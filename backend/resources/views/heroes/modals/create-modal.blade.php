<!-- resources/views/assets/modals/create-modal.blade.php -->
<div class="modal fade" id="createAssetModal" tabindex="-1" role="dialog" aria-labelledby="createAssetModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="createAssetForm" method="POST" action="{{ route('assets.store') }}" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title" id="createAssetModalLabel">Add New File</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required>
                    </div>

                    <div class="form-group">
                        <label for="logo_file">File</label>
                        <input type="file" class="form-control" id="logo_file" name="logo_file" accept="image/*" required>
                    </div>

                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" name="description"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="url">URL</label>
                        <input type="url" class="form-control" id="url" name="url">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>
