<?php

namespace Database\Seeders;

use App\Models\Widget;
use Illuminate\Database\Seeder;

class WidgetSeeder extends Seeder
{
    public function run(): void
    {
        $widgets = [
          
         
            // Employee widgets
            [
                'name' => 'Employee Statistics',
                'description' => 'Overview of employee counts and status',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 20,
                'status' => true,
            ],
            [
                'name' => 'Employee Growth Trend',
                'description' => 'New employees over time',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 21,
                'status' => true,
            ],
            [
                'name' => 'Attendance Overview',
                'description' => 'Daily attendance tracking',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 22,
                'status' => true,
            ],
            // School widgets
            [
                'name' => 'School Statistics',
                'description' => 'Overview of schools, departments, and classrooms',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 23,
                'status' => true,
            ],
            [
                'name' => 'School Growth Trend',
                'description' => 'Schools and departments over time',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 24,
                'status' => true,
            ],
            [
                'name' => 'Departments by School',
                'description' => 'Department distribution across schools',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 25,
                'status' => true,
            ],
        ];

        foreach ($widgets as $widget) {
            Widget::updateOrCreate(
                ['name' => $widget['name'], 'module' => $widget['module']],
                $widget
            );
        }
    }
}
