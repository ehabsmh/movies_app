let rowContent = document.getElementById("rowContent");
let searchOnAll = document.getElementById("searchOnAll");
let trendingMovies = [];
let getTrendingMovies = async function (list) {
  let response = await fetch(
    `https://api.themoviedb.org/3/${list}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2LJDegW-S-6qr0tCvViakGYWH-FflQkjprzjWGpnVwDbPplPdCxlTbZ1g`
  );
  let finalResult = await response.json();
  trendingMovies = finalResult.results;
  displayTrendingMovies(trendingMovies);
  console.log(trendingMovies);
};
getTrendingMovies(`trending/all/day`);

let displayTrendingMovies = function (moviesList) {
  let box = ``;
  for (let i = 0; i < moviesList.length; i++) {
    box += `          <div class="col-md-4">
    <div class="movie">
    <img src='https://image.tmdb.org/t/p/w500/${
      moviesList[i].poster_path
    }' class="w-100" alt="">
    <div class="movie-caption">
    <h3>${moviesList[i].title || moviesList[i].name}</h3>
    <p>${moviesList[i].overview}</p>
    <p>Rate: ${moviesList[i].vote_average}</p>
    <p>Date: ${moviesList[i].release_date || moviesList[i].first_air_date}</p>
    </div>
    </div>
    </div>
`;
  }
  rowContent.innerHTML = box;
};

let navWidth = $("ul").outerWidth();

(function () {
  $(".custom-nav").animate({ left: `-${navWidth}` }, 0);
  $("#closeBtn").html('<i class="fa-solid fa-bars"></i>');
})();

$("#closeBtn").click(function () {
  if ($(".custom-nav").css("left") == "0px") {
    $(".custom-nav").animate({ left: `-${navWidth}` }, 1000);
    $("#closeBtn").html('<i class="fa-solid fa-bars"></i>');
  } else {
    $(".custom-nav").animate({ left: `0` }, 1000);
    $("#closeBtn").html('<i class="fa-solid fa-xmark"></i>');
  }
  console.log("hello");
});

let links = $(".nav-link");

links.eq(0).click(function () {
  getTrendingMovies(`movie/now_playing`);
});
links.eq(1).click(function () {
  getTrendingMovies(`movie/popular`);
});
links.eq(2).click(function () {
  getTrendingMovies(`movie/top_rated`);
});
links.eq(3).click(function () {
  getTrendingMovies(`trending/all/day`);
});
links.eq(4).click(function () {
  getTrendingMovies(`movie/upcoming`);
});
links.eq(5);

$("#searchOnCurrent").input;

let searchMovie = async function (search) {
  let searchResult = [];
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2LJDegW-S-6qr0tCvViakGYWH-FflQkjprzjWGpnVwDbPplPdCxlTbZ1g&language=en-US&include_adult=false`
  );
  let finalResult = await response.json();
  trendingMovies = finalResult.results;
  for (let i = 0; i < trendingMovies.length; i++) {
    if (
      trendingMovies[i].title.toLowerCase().includes(search.toLowerCase()) ==
      true
    ) {
      searchResult.push(trendingMovies[i]);
      displayTrendingMovies(searchResult);
    }
  }
};
searchOnAll.addEventListener("input", function () {
  searchMovie(`${searchOnAll.value}`);
});

// let linksSearch = document.querySelectorAll(".link-data");

// for (let i = 0; i < linksSearch.length; i++) {
//   linksSearch[i].addEventListener("click", function (e) {
//     let currentCategory = e.target.innerHTML;
//     getMovies(currentCategory);
//   });
// }

// async function getMovies(currentCategory) {
//   let response = await fetch(
//     `https://api.themoviedb.org/3/movie/${currentCategory}?api_key=d4aa3ca194c08dc7be046faeb67aa841&language=en-US&page=1`
//   );
//   let moviesData = response.json();
//   displayTrendingMovies(moviesData.results);
// }

/*--------------------- REGEX ------------------------*/

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordInput");
let checkPasswordInput = document.getElementById("checkPasswordInput");

nameInput.addEventListener("keyup", () => {
  let ErrorMesgName = document.getElementById("ErrorMesgName");
  let nameRejax = /\w{3,}/;
  if (nameRejax.test(nameInput.value)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    ErrorMesgName.classList.add("d-none");
  } else if (nameInput.value == "") {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.remove("is-valid");
    ErrorMesgName.classList.add("d-none");
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    ErrorMesgName.classList.remove("d-none");
  }
});

emailInput.addEventListener("keyup", () => {
  let ErrorMesgEmail = document.getElementById("ErrorMesgEmail");
  let emailRejax = /\w{3,}@\w+\.\w+/;
  if (emailRejax.test(emailInput.value)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    ErrorMesgEmail.classList.add("d-none");
  } else if (emailInput.value == "") {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-valid");
    ErrorMesgEmail.classList.add("d-none");
  } else {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    ErrorMesgEmail.classList.remove("d-none");
  }
});

phoneInput.addEventListener("keyup", () => {
  let ErrorMesgPhone = document.getElementById("ErrorMesgPhone");
  let phoneRegex = /^(002 ?)?01[0125]\d{8}$/;
  if (phoneRegex.test(phoneInput.value)) {
    phoneInput.classList.add("is-valid");
    phoneInput.classList.remove("is-invalid");
    ErrorMesgPhone.classList.add("d-none");
  } else if (nameInput.value == "") {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.remove("is-valid");
    ErrorMesgPhone.classList.add("d-none");
  } else {
    phoneInput.classList.remove("is-valid");
    phoneInput.classList.add("is-invalid");
    ErrorMesgPhone.classList.remove("d-none");
  }
});

ageInput.addEventListener("keyup", () => {
  let ErrorMesgAge = document.getElementById("ErrorMesgAge");
  let ageRegex = /^[1-9][0-9]$/;
  if (ageRegex.test(ageInput.value)) {
    ageInput.classList.add("is-valid");
    ageInput.classList.remove("is-invalid");
    ErrorMesgAge.classList.add("d-none");
  } else if (ageInput.value == "") {
    ageInput.classList.remove("is-invalid");
    ageInput.classList.remove("is-valid");
    ErrorMesgAge.classList.add("d-none");
  } else {
    ageInput.classList.remove("is-valid");
    ageInput.classList.add("is-invalid");
    ErrorMesgAge.classList.remove("d-none");
  }
});

passwordInput.addEventListener("keyup", () => {
  let ErrorMesgPassword = document.getElementById("ErrorMesgPassword");
  let passRegex = /[a-zA-Z0-9_]{8,}/;
  if (passRegex.test(passwordInput.value)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    ErrorMesgPassword.classList.add("d-none");
  } else if (passwordInput.value == "") {
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-valid");
    ErrorMesgPassword.classList.add("d-none");
  } else {
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    ErrorMesgPassword.classList.remove("d-none");
  }
});
checkPasswordInput.addEventListener("keyup", (e) => {
  check(e.target.value);
});
function check(checkPassw) {
  let matchedMesgPassword = document.getElementById("matchedMesgPassword");
  let notMatchedMesgPassword = document.getElementById(
    "notMatchedMesgPassword"
  );
  if (passwordInput.value == checkPassw) {
    checkPasswordInput.classList.add("is-valid");
    checkPasswordInput.classList.remove("is-invalid");
    matchedMesgPassword.classList.remove("d-none");
    notMatchedMesgPassword.classList.add("d-none");
  } else if (checkPasswordInput.value == "") {
    checkPasswordInput.classList.remove("is-invalid");
    checkPasswordInput.classList.remove("is-valid");
    notMatchedMesgPassword.classList.add("d-none");
    matchedMesgPassword.classList.add("d-none");
  } else {
    checkPasswordInput.classList.remove("is-valid");
    checkPasswordInput.classList.add("is-invalid");
    matchedMesgPassword.classList.add("d-none");
    notMatchedMesgPassword.classList.remove("d-none");
  }
}
