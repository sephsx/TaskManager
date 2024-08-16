<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create multiple users
        User::factory()->create([
            'id' => 1,
            'name' => 'Oreo',
            'email' => 'oreo@example.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'id' => 2,
            'name' => 'Chip',
            'email' => 'chip@example.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        // Create projects and tasks
        Project::factory()->count(30)->create();
    }
}
