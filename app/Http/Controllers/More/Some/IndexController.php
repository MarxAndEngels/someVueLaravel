<?php

namespace App\Http\Controllers\More\Some;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
   public function __invoke(){
    $people = Person::latest()->paginate(2);
    return $people;
   }
}
