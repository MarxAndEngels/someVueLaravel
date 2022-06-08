<?php

namespace App\Http\Controllers\Person;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShowController extends Controller
{
    public function __invoke($id)
    {
        $person = Person::find($id);
        return $person;
    }


}
