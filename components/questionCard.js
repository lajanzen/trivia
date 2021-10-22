import createElement from "../lib/elements";
import styles from "./questionCard.module.css";

export default function createQuestionCard({
  question,
  correct_answer,
  incorrect_answers,
}) {
  const questionCard = createElement(
    "div",
    { className: styles.questionCard },
    [
      createElement(
        "h2",
        { innerHTML: question, className: styles.question },
        []
      ),
      createElement("p", {
        className: styles.answer,
        innerHTML: correct_answer,
      }),
      createElement("p", {
        className: styles.answer,
        innerHTML: incorrect_answers[0],
      }),
      createElement("p", {
        className: styles.answer,
        innerHTML: incorrect_answers[1],
      }),
      createElement("p", {
        className: styles.answer,
        innerHTML: incorrect_answers[2],
      }),
    ]
  );

  return questionCard;
}
