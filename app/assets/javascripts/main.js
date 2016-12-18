$(function(){

  let form = $('#movie-search');
  form.submit(function(e){
  	 e.preventDefault();

	 $.ajax({
	  
	   url: 'http://www.omdbapi.com/?',
	   data: form.serialize()

	 })
 	
 	.done(function(data){
 		displayMovies(data);
 	 });
   });

 	function displayMovies(data){

 		let container = $("#movies")
 		let htmlString = "";
 	
 		container.empty();

 		if(data["Response"] == "False"){
 			htmlString = `<div class="alert alert-danger text-center" role="alert">${data["Error"]}</div>`
 		}
 		else{
 			data["search"].forEach(function(movie){
	 			 		htmlString += `<img src=${movie["Poster"]} />
                   <p>${movie["Title"]}</p>
                   <p>${movie["Year"]}</p>`;
	 	});

	 	// htmlString += `<p>${data.slug}</p>`;
	 	// htmlString += `<p>${data.synopsis}</p>`;

	 	container.append(htmlString);
 		}
 	}

 	$('#movies').on('click', 'img', function(e){
	  e.preventDefault();
	  let id = $(e.target).data('id');

	   $.ajax({
		    url: "http://hummingbird.me/api/v1/movie/" + id
		})

	  	.done(function(id){
	  		displayMovie(id);
	  	});
	});

		function displayMovie(id){

			let container = $("#movie")
			let htmlString = "";
			
			container.empty();
	  		htmlString += `<p> ${id.synopsis} </p>`;
	  		container.append(htmlString);
	  		// console.log(id.synopsis);
		}
})

// $(function(){
//  $.ajax({
//    // url: 'http://hummingbird.me/full_anime/nisekoi',
//    url: 'https://hummingbird.me/search.json?',
//    data: {"query" : "pokemon"}
//  })
//  .done(function(data){
//    console.log(data);
//  });
// })

// $(function(){
//  $.ajax({
//    url: 'http://hummingbird.me/api/v1/anime/pokemon',
//  })
//  .done(function(data){
//    console.log(data);
//  });
// })


// $(function(){
//   $.ajax({
//     url: 'http://www.omdbapi.com/?',
//     data: "s=superman"
//   })
//   .done(function(data){
//     let htmlString = "";

//     data["Search"].forEach(function(movie){
//       htmlString += `<p>${movie["Title"]}</p>`;
//     });

//     $("#movies").append(htmlString);
//   });
// })
// $(function(){
//   $.ajax({
//     url: 'http://www.omdbapi.com/?',
//     data: {"s": "superman"}
//   })
//   .done(function(data){
//     console.log(data);
//   });
// })