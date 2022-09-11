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

function deepClone(object) {
    return JSON.parse(JSON.stringify(object))
}

function merge(object1, object2) {
    return { ...object1, ...object2 }
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
    const message = `\n${showcase.title}\n\n${showcase.cast ?? "Cast Not Available"}\n\n${showcase.year ?? "Year not Available"}\n\n${showcase.overview ?? "Unknown"}\n\n${showcase.genres ?? "Genre Unknown"}`
    movieMessage.innerText = message;

    imageSpace.append(movieShowcase);
});
document.body.append(imageSpace);

 const searchBar = document.getElementById("searchResult");

function searchFunction() {
   
    const searchButton = document.querySelector(".search-button");

    console.log(searchBar.value)

    searchButton.addEventListener("click", () => {
       imageSpace.innerHTML = "";
       let chosenMovie = completeMovieList.filter(titleCheck)
       chosenMovie.forEach(movie => {
        const movieShowcase = document.createElement("div");
        movieShowcase.classList.add("movie_frame");
    
        const movieImg = document.createElement("img");
        movieImg.classList.add("picture");
        movieImg.src = movie.imageUrl;
        movieShowcase.append(movieImg);
    
        const movieMessage = document.createElement("div")
        movieMessage.classList.add("Description");
        movieShowcase.append(movieMessage);
        const message = `\n${movie.title}\n\n${movie.cast ?? "Cast Not Available"}\n\n${movie.year ?? "Year not Available"}\n\n${movie.overview ?? "Unknown"}\n\n${movie.genres ?? "Genre Unknown"}`
        movieMessage.innerText = message;
    
        imageSpace.append(movieShowcase);
       })

       searchBar.value = "";
       
    })

}

searchFunction();

function titleCheck(title) {
    return title.title.toLocaleLowerCase() === searchBar.value.toLocaleLowerCase();
}






console.log("render list:", renderMovieSet);

console.log("Complete Movie List:", completeMovieList);

