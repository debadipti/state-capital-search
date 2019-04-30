// get DOM variables
const search = document.querySelector("#search");
const list = document.querySelector("#list");

// searchState function
const searchState = async inputText => {
  text = inputText.trim();
  if (text) {
    // fetch the json data
    const res = await fetch("../data/state_capitals.json");
    const states = await res.json();
    // get match states
    let matches = states.filter(state => {
      const regex = new RegExp(`^${text}`, "gi");
      return state.name.match(regex) || state.abbr.match(regex);
    });
    // output function
    outputHtml(matches);
  } else {
    list.innerHTML = "";
  }
};

// outputHtml function
const outputHtml = matches => {
  if (matches.length > 0) {
    const output = matches.map(match => `<div>${match.name}</div>`).join("");
    list.innerHTML = output;
  }
};

// search addEventListener
search.addEventListener("keyup", () => searchState(search.value));
