<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $guarded = [];


    public function portfolioType(){
        return $this->belongsTo(PortfolioType::class);
    }

    public function detailImages(){
        return $this->hasMany(PortfolioDetailImage::class);
    }
}
