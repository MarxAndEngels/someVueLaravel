<?php

namespace App\Http\Controllers\Person;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Persons\UpdateRequest;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request,$id)
    {
        $data= $request->validated();
        $person = Person::find($id);
        $person->update($data);
        return $data;
    }


}
