<?php

namespace Modules\School\Actions\Dashboard\V1;

use Illuminate\Support\Str;
use Modules\School\Models\Program;

class CreateProgramAction
{
    public function execute(array $data): Program
    {
        $data['uuid'] = (string) Str::uuid();
        // current_enrollment is NOT NULL DEFAULT 0 -- an explicit null in the
        // insert bypasses the DB default and crashes with an integrity error.
        $data['current_enrollment'] ??= 0;

        return Program::create($data);
    }
}
