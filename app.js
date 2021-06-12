let searchTerms = document.querySelector("#search");
const searchButton = document.querySelector("#submit");
const remove = document.querySelector("#remove");
const gifContainer = document.querySelector("#gif-container");
const api_key = "0UmZHbGAC5wuiKFTgAoVbq0DqLYjYH4Q";

button.addEventListener("click", getGif(api_key, search));

async function getGif(api_key, search) {
  const gif = await axios.get(
    `api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}`
  );
  console.log(gif);
  gifContainer.append(gif);
}
