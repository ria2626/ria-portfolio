<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the status badge color based on status.
     */
    public function getStatusColorAttribute()
    {
        return match($this->status) {
            'pending' => 'secondary',
            'in_progress' => 'primary',
            'completed' => 'success',
            default => 'secondary',
        };
    }

    /**
     * Scope a query to only include tasks of a given status.
     */
    public function scopeOfStatus($query, $status)
    {
        return $query->where('status', $status);
    }
}