import createElement from "../lib/elements";
import styles from "./categoryCard.module.css";

export default function createCategoryCard({ id, name }) {
  const categoryCard = createElement(
    "a",
    {
      href: `https://opentdb.com/api_count.php?category=${id}`,
      className: styles.categoryCard,
    },
    [name]
  );
  return categoryCard;
}
