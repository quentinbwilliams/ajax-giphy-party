let search = document.querySelector("#search");
let button = document.querySelector("#submit");
const gifContainer = document.querySelector("#gif-container");
const api_key = "0UmZHbGAC5wuiKFTgAoVbq0DqLYjYH4Q";

button.addEventListener("click", getGif(api_key, search));

async function getGif(api_key, search) {
  const result = await axios.get("api.giphy.com/v1/gifs/search", {
    params: {
      api_key: api_key,
      q: search.value,
    },
  });
  console.log(result);
}

let gif = getGif(api_key, search);
gifContainer.append(gif);
