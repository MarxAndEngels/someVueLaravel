<?php

namespace App\Http\Controllers\More;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\More\IndexRequest;

class IndexController extends Controller
{
   public function __invoke(IndexRequest $request){
      $data= $request->validated();
      $allPost = Person::all()->count();
      if($data['count'] > $allPost){
         $data['count'] = $allPost;
      }
    $people = Person::latest()->paginate($data['count']);
    return $people;
   }
}
