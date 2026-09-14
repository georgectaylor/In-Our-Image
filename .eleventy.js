module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addCollection("research", (api) =>
    api.getFilteredByGlob("content/research/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("essays", (api) =>
    api.getFilteredByGlob("content/essays/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("fiction", (api) =>
    api.getFilteredByGlob("content/fiction/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("allWork", (api) =>
    api.getFilteredByGlob("content/**/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
