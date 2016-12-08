$(function(){

  let form = $('#anime-search');
  form.submit(function(e){
  	 e.preventDefault();

	 $.ajax({
	  
	   url: 'https://hummingbird.me/search.json?',
	   data: form.serialize()

	 })
 	
 	.done(function(data){
 		displayAnimes(data);
 	 });
 });

 	function displayAnimes(data){

 		let container = $("#animes")
 		let htmlString = "";
 	
 		container.empty();

 		if(data["Response"] == "False"){
 			htmlString = `<div class="alert alert-danger text-center" role="alert">${data["Error"]}</div>`
 		}
 		else{
 			data["search"].forEach(function(anime){
	 			 		htmlString += `	<img src = ${anime["image"] == "N/A" ? "/images/noimage.png" : anime["image"]} data-id="${anime['link']}"/>
	 						<p> ${anime["title"]} </p>
	 						<p>	${anime["rank"]} </p>`;
	 	});

	 	// htmlString += `<p>${data.slug}</p>`;
	 	// htmlString += `<p>${data.synopsis}</p>`;

	 	container.append(htmlString);
 		}
 	}

 	$('#animes').on('click', 'img', function(e){
	  e.preventDefault();
	  let id = $(e.target).data('id');
	   $.ajax({
		    url: "https://hummingbird.me/search.json?",
		    data: {i: id}   
		})
	  	.done(function(data){
	    	displayAnime(data);
	  	})
	});

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