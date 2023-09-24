const cl = console.log;
const moviecontainer = document.getElementById("moviecontainer");

const rating = movierating => {
	if(movierating < 5){
		return "bg-danger"
	}else if(movierating >= 5 && movierating < 7){
		return "bg-warning"
	}else if(movierating >= 7 && movierating < 10){
		return "bg-success"
	}else{
		return alert('please enter valid rating')
	}
}

let result = "";

movieArray.forEach(movie => {
	result +=`
		<div class="col-md-3">
			<div class="card mb-4">
				<figure class="moviecard m-0">
					<img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}">
					<figcaption>
						<div class="movietitle text-white p-4">
							<div class="row">
								<div class="col-md-10">
									<h2 class="m-0">${movie.title}</h2>
								</div>
								<div class="col-md-2">
									<span class="${rating(movie.vote_average)}">${movie.vote_average}</span>
								</div>
							</div>
						</div>
						<div class="movieoverview p-4">
							<h3 class="mb-1"><em><strong>${movie.title}</strong></em></h3>
							<h4 class="mb-1"><em><strong>Overview</strong></em></h4>
							<p><em>${movie.overview}</em></p>
						</div>
					</figcaption>
				</figure> 
			</div>
		</div>
	`
})





moviecontainer.innerHTML = result;