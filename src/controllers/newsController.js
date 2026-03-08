const axios = require("axios");

exports.getNews = async (req, res) => {
  try {
    const preferences = req.user.preferences || ["technology"];

    const category = preferences[0];

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines`,
      {
        params: {
          category: category,
          country: "us",
          apiKey: process.env.NEWS_API_KEY
        }
      }
    );

    const articles = response.data.articles.slice(0, 5).map(article => ({
      title: article.title,
      source: article.source.name,
      url: article.url
    }));

    res.status(200).json({
      news: articles
    });

  } catch (error) {

    console.error("News API Error:", error.message);

    res.status(500).json({
      error: "Failed to fetch news"
    });

  }
};