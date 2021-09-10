/* eslint-disable max-len */
export const fetchArticles = async (search) => {
  const res = await fetch(`https://newsapi.org/v2/everything?qInTitle=${search}&apiKey=${process.env.EVERYTHING_KEY}`);
  const json = await res.json();
  const articles = json.articles;
  const mungedArticles = mungeThese(articles);
  return mungedArticles;
};

const mungeThese = (array) => {
  return array.map((single) => {return {
    author: single.author,
    title: single.title,
    content: single.content,
    urlToImage: single.urlToImage,
    id: single.source.id,
    name: single.source.name
  };});
};
