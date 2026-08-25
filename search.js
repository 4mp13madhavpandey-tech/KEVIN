
const axios = require("axios");
const cheerio = require("cheerio");

async function fandomSearch(wiki, query) {
  try {
    const searchUrl =
      `${wiki}/wiki/Special:Search?query=${encodeURIComponent(query)}`;

    const search = await axios.get(searchUrl);

    const $ = cheerio.load(search.data);

    const firstResult =
      $(".unified-search__result__title").first().attr("href");

    if (!firstResult) return null;

    const page = await axios.get(firstResult);

    const $$ = cheerio.load(page.data);

    const text = $$("#mw-content-text")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    return text.slice(0, 3500);

  } catch (err) {
    console.log("Wiki search failed:", err.message);
    return null;
  }
}

module.exports = {
  fandomSearch
};
