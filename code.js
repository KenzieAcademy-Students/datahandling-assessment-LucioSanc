// Your Code Here!

// console.log("Movies:", movies);
// console.log("MovieDetails:", movieDetails);

const completeMovieList = movieDetails.map(movie1 => {
    const matchOnTitleAndYear = movie2 => (movie1.title === movie2.title
        && releaseYearMatches(movie1, movie2)
    );
    const matchedMovie = movies.find(matchOnTitleAndYear) ?? {}
    
    return merge(deepClone(movie1), deepClone(matchedMovie))
})

function releaseYearMatches(movieDetailsObject, moviesObject) {
   return new Date(movieDetailsObject.release_date).getFullYear() === moviesObject.year;
}

function deepClone (object) {
    return JSON.parse(JSON.stringify(object))
}

function merge (object1, object2) {
    return {...object1, ...object2}
}

const imageSpace = document.createElement("p");
imageSpace.classList.add("movie_list");

const renderMovieSet = completeMovieList.forEach((showcase) => {
    const movieShowcase = document.createElement("div");
    movieShowcase.classList.add("movie_frame");
    
    const movieImg = document.createElement("img");
    movieImg.classList.add("picture");
    movieImg.src = showcase.imageUrl;
    movieShowcase.append(movieImg);
    
    const movieMessage = document.createElement("div")
    movieMessage.classList.add("Description");
    movieShowcase.append(movieMessage);
    const message = `\n${showcase.title}\n\n${showcase.cast ?? "Cast Not Available"}\n\n${showcase.year ?? "Year not Available"}\n\n${showcase.overview ?? Unknown}\n\n${showcase.genres ?? "Genre Unknown"}`
    movieMessage.innerText = message;
    
    imageSpace.append(movieShowcase);
});
document.body.append(imageSpace);

const searchResult = document.getElementById("searchMovie");


console.log(searchResult);

const renderNewMovieSet = completeMovieList.filter(selection => {

})





console.log("render list:", renderMovieSet);

console.log("Complete Movie List:", completeMovieList);

