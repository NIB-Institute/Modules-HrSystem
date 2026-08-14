<?php

namespace Modules\School\Actions\Dashboard\V1;

use Modules\School\Models\Program;

class UpdateProgramAction
{
    public function execute(Program $program, array $data): Program
    {
        // current_enrollment is NOT NULL DEFAULT 0 -- an explicit null in the
        // update bypasses the DB default and crashes with an integrity error.
        if (array_key_exists('current_enrollment', $data)) {
            $data['current_enrollment'] ??= 0;
        }

        $program->update($data);

        return $program->fresh();
    }
}
