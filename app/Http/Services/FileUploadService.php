<?php

namespace App\Http\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    /**
     * Save the uploaded file with a unique SEO-friendly filename.
     *
     * @param  UploadedFile  $file
     * @param  string  $directory
     * @param  string|null  $oldFilePath  Previous file path to delete
     * @return string  The stored file path (relative to storage disk)
     */
    public function saveFile(UploadedFile $file, string $directory): string
    {
        
        $user = auth()->user();
        $userNameSlug = $user ? Str::slug($user->name) : 'user';
        $uniqueSuffix = now()->format('YmdHis') . '-' . Str::random(6);
        $extension = $file->getClientOriginalExtension();
        $filename = "{$userNameSlug}-{$uniqueSuffix}.{$extension}";

        return $file->storeAs($directory, $filename, 'public');
    }

    public function deleteFile($filePath)
    {
        if ($filePath && Storage::disk('public')->exists($filePath)) {
            Storage::disk('public')->delete($filePath);
        }
    }
}
