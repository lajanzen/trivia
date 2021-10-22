import createCategoryCard from "./components/categoryCard";
import createQuestionCard from "./components/questionCard";
import fetchCategories from "./lib/api";
import createElement from "./lib/elements";
import "./style.css";

async function app() {
  const appElement = document.querySelector("#app");
  const subtitle = createElement("p", {}, ["Choose a category:"]);
  const header = createElement("header", { className: "header" }, [
    createElement("h1", {}, ["Trivia"]),
    subtitle,
  ]);

  const categories = await fetchCategories();

  const categoryCards = categories.map((category) =>
    createCategoryCard(category, handleOnClick)
  );

  async function handleOnClick(id, name) {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=50&category=${id}`
    );
    const body = await response.json();
    const question = body.results[0];

    const questionCard = createQuestionCard(question);
    main.innerHTML = "";
    subtitle.innerHTML = name;
    main.append(questionCard);
  }

  const main = createElement("main", {}, [
    createElement("div", { className: "categories" }, [...categoryCards]),
  ]);

  appElement.append(header, main);
  return app;
}

app();
