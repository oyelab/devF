<!-- resources/views/assets/modals/edit-modal.blade.php -->
<div class="modal fade" id="editAssetModal" tabindex="-1" role="dialog" aria-labelledby="editAssetModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="editAssetForm" method="POST" action="{{ route('assets.update', ['asset' => 'placeholder']) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title" id="editAssetModalLabel">Edit Asset</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="edit_title">Title</label>
                        <input type="text" class="form-control" id="edit_title" name="title" required>
                    </div>

                    <div class="form-group">
                        <label for="edit_logo_file">Logo</label>
                        <input type="file" class="form-control" id="edit_logo_file" name="logo_file" accept="image/*">
                        <img id="edit_logo_preview" src="" width="100" class="mt-2" alt="Current Logo">
                    </div>

                    <div class="form-group">
                        <label for="edit_description">Description</label>
                        <textarea class="form-control" id="edit_description" name="description"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="edit_url">URL</label>
                        <input type="url" class="form-control" id="edit_url" name="url">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <!-- Updated dismiss -->
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>