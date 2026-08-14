<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    /**
     * List all media available.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Media::query()
            ->orderBy('created_at', 'desc');

        // Optional: filter by collection
        if ($collection = $request->query('collection')) {
            $query->where('collection_name', $collection);
        }

        // Optional: filter by type (e.g. image)
        if ($type = $request->query('type')) {
            $query->where('mime_type', 'like', $type . '/%');
        }

        $media = $query->get();

        $data = $media->map(function (Media $item) {
            return [
                'id' => $item->id,
                'uuid' => $item->uuid,
                'name' => $item->name,
                'file_name' => $item->file_name,
                'url' => $item->getUrl(),
                'thumb_url' => $item->hasGeneratedConversion('thumb')
                    ? $item->getUrl('thumb')
                    : $item->getUrl(),
                'mime_type' => $item->mime_type,
                'size' => $item->size,
                'size_formatted' => $this->formatBytes($item->size),
                'collection_name' => $item->collection_name,
                'created_at' => $item->created_at->toIso8601String(),
            ];
        });

        return response()->json([
            'data' => $data,
            'meta' => [
                'total' => $data->count(),
            ],
        ]);
    }

    /**
     * Upload generic media.
     */
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'max:10240'], // 10MB max
            'collection' => ['nullable', 'string'],
        ]);

        $file = $request->file('file');
        $currentUser = $request->user();
        $collectionName = $request->input('collection', 'default');

        try {
            // Attach media to current user to have it globally accessible under their ownership
            $media = $currentUser->addMedia($file)
                ->toMediaCollection($collectionName);

            $url = $media->getUrl();

            return response()->json([
                'data' => [
                    'id' => $media->id,
                    'uuid' => $media->uuid,
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'url' => $url,
                    'thumb_url' => $media->hasGeneratedConversion('thumb')
                        ? $media->getUrl('thumb')
                        : $url,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'size_formatted' => $this->formatBytes($media->size),
                    'collection_name' => $media->collection_name,
                    'created_at' => $media->created_at->toIso8601String(),
                ],
                'url' => $url,
                'message' => 'Media uploaded successfully',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to upload media: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete a media item.
     * Only the uploader (or a super-admin) may delete it -- browsing/uploading
     * is open to all authenticated users, so deletion mirrors that with an
     * ownership check instead of a permission gate (same pattern as
     * AvatarController::destroy()).
     */
    public function destroy(Media $media, Request $request): JsonResponse
    {
        $user = $request->user();
        $isOwner = $media->model_type === User::class && (int) $media->model_id === (int) $user->id;

        if (!$user->hasRole('super-admin') && !$isOwner) {
            return response()->json([
                'message' => 'You do not have permission to delete this media item.',
            ], 403);
        }

        $media->delete();

        return response()->json([
            'message' => 'Media deleted successfully',
        ]);
    }

    /**
     * Format bytes to human readable format.
     */
    private function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        $bytes /= pow(1024, $pow);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}
