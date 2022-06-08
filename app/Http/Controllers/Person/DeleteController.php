<?php

namespace App\Http\Controllers\Person;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
        $person = Person::find($id);
        $person->delete();
        return response([]); //возвращаем ответ 200
    }


}
