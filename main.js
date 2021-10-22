import createElement from "./lib/elements";
import "./style.css";

function app() {
  const appElement = document.querySelector("#app");
  const header = createElement("header", {}, ["Trivia"]);

  const main = createElement("main", {}, [
    createElement("p", {}, ["Choose a category"]),
    createElement("div", {}, ["categories"]),
  ]);

  appElement.append(header, main);
  return app;
}

app();
