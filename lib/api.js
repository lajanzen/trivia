export default async function fetchCategories() {
  const response = await fetch("https://opentdb.com/api_category.php");
  const body = await response.json();
  const categories = body.trivia_categories;

  return categories;
}
