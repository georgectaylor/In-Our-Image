module.exports = {
  layout: "post.njk",
  section: "Essay",
  sectionSlug: "essays",
  accentVar: "--accent-essay",
  eleventyComputed: {
    permalink: (data) => `/essays/${data.page.fileSlug}/index.html`,
  },
};
