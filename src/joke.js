async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
  });
  const data = await response.json();
  return data.joke;
}

module.exports = getJoke;