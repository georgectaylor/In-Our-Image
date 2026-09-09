module.exports = {
  layout: "post.njk",
  section: "Research",
  sectionSlug: "research",
  accentVar: "--accent-research",
  eleventyComputed: {
    permalink: (data) => `/research/${data.page.fileSlug}/index.html`,
  },
};
