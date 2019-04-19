"use strict";
var movies1;
var movies2;
var movies3;
var movies4;
var movies5;
var movies6;
var movies7;
var movies8;
var user;


function init(m1,m2,m3,m4,m5,m6,m7,m8,u) {
	movies1 = m1;
	movies2 = m2;
	movies3 = m3;
	movies4 = m4;
	movies5 = m5;
	movies6 = m6;
	movies7 = m7;
	movies8 = m8;
	user = u;
	inits();
}




function inits() {
	
	jQuery(document).ready(function ($) {
		
		
		var text1 = "";
		var i;
		var text2 = "";
		var j;
		text2 += `<div class="col-md-6 grid_3">
			  <div class="row_1">
			  <div class="col-md-6 grid_4"><a href="`+movies1.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies1.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies1.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies1.name+`/ Léon</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="col-md-6 grid_4"><a href="`+movies2.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies2.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies2.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies2.name+`</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="clearfix"> </div>
			   </div>
			   
			   <div class="row_1">
			  <div class="col-md-6 grid_4"><a href="`+movies3.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies3.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies3.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies3.name+`</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="col-md-6 grid_4"><a href="`+movies4.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies4.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies4.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies4.name+`/ Titanic</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="clearfix"> </div>
			   </div>
			</div>
			
			<div class="col-md-6 grid_3">
			  <div class="row_1">
			  <div class="col-md-6 grid_4"><a href="`+movies5.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies5.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies5.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies5.name+`/ Léon</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="col-md-6 grid_4"><a href="`+movies6.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies6.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies6.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies6.name+`</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="clearfix"> </div>
			   </div>
			   
			   <div class="row_1">
			  <div class="col-md-6 grid_4"><a href="`+movies7.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies7.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies7.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies7.name+`</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="col-md-6 grid_4"><a href="`+movies8.movie_url+`">
				  <div class="grid_2">
					<img src="doubanImg/`+movies8.name+`.jpg" class="img-responsive" alt=""/>
					<div class="caption1">
						<ul class="list_3">
				    		<li><i class="icon5"> </i><p>`+movies8.rating+`</p></li>
				    	</ul>
				    	<p class="m_3">`+movies8.name+`/ Titanic</p>
					</div>
				   </div>
				   
			   </a></div>
			   <div class="clearfix"> </div>
			   </div>
			</div>
		`;
		$('#movies-box').html(text2);
	});
	
	
}