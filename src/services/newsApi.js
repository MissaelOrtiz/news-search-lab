/* eslint-disable max-len */
export const fetchArticles = async (search) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=4f325ec291324b609e8690941249cda9`);
  const json = res.json();
  const articles = json.articles;
  return articles;
};
