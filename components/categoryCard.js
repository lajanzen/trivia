import createElement from "../lib/elements";
import styles from "./categoryCard.module.css";

export default function createCategoryCard({ name, id }, onClick) {
  const categoryCard = createElement(
    "button",
    {
      onclick: (event) => {
        event.preventDefault();
        onClick(id, name);
      },
      className: styles.categoryCard,
    },
    [name]
  );
  return categoryCard;
}
