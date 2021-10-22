import createCategoryCard from "./components/categoryCard";
import createElement from "./lib/elements";
import "./style.css";

async function app() {
  const appElement = document.querySelector("#app");
  const header = createElement("header", { className: "header" }, [
    createElement("h1", {}, ["Trivia"]),
    createElement("p", {}, ["Choose a category:"]),
  ]);

  const response = await fetch("https://opentdb.com/api_category.php");
  const body = await response.json();
  const categories = body.trivia_categories;

  const categoryCards = categories.map((category) =>
    createCategoryCard(category)
  );

  const main = createElement("main", {}, [
    createElement("div", { className: "categories" }, [...categoryCards]),
  ]);

  appElement.append(header, main);
  return app;
}

app();
