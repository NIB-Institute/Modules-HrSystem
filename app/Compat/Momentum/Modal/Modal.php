<?php

namespace Momentum\Modal;

use Inertia\Response;

/**
 * Compatibility stub for the based/momentum-modal package, which doesn't
 * support inertia-laravel ^3. Module controllers in Modules/{Employee,School}
 * type-hint their return as Momentum\Modal\Modal; this stub extends
 * Inertia\Response so those type hints satisfy when our Inertia::modal()
 * shim returns a regular Inertia response.
 */
class Modal extends Response
{
}
