"use strict";
var movies;
var block;


function init(m) {
	movies = m;
	inits();
}




function inits() {
	
	jQuery(document).ready(function ($) {
		
		var text1 = "";
		var i;
		for(i in movies){
			console.log(i);
			text1 += `<li>				
					<img src="doubanImg/`+movies[i].name+`.jpg" style="height:368px" class="img-responsive"/><div class="grid-flex"><a href="#">`+movies[i].name+`</a><p>`+movies[i].rating+`</p></div>
					</li>
				
		`}
		$('#flexiselDemo3').html(text1);
		
		var text2 = "";
		var j;
		for(i in movies){
			text2 += `<div class="movie movie-test movie-test-dark movie-test-left">				
						<div class="movie__images">
                            <a href="`+movies[i].movie_url+`" class="movie-beta__link">
                                <img alt="" src="doubanImg/`+movies[i].name+`.jpg" class="img-responsive" style="height:280px;" alt=""/>
                            </a>
                        </div>
						<div class="movie__info">
                            <a href="`+movies[i].movie_url+`" class="movie__title">`+movies[i].name+`</a>
                            <p class="movie__time">观看人数：`+movies[i].num+`</p>
							
                            <ul class="list_6" style="margin-top:5px;margin-bottom:5px">
						    			
						    	<li>评分 : &nbsp;&nbsp;<p>`+movies[i].rating+`</p></li>
						    			
						    	<div class="clearfix"> </div>
						    </ul>
						    <span>简介：`+movies[i].quote+`</span>
                        </div>
                        <div class="clearfix"> </div>
					</div>
				
		`}
		$('#conten-box').html(text2);
	});
	
	
}