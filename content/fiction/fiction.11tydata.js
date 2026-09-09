module.exports = {
  layout: "post.njk",
  section: "Fiction",
  sectionSlug: "fiction",
  accentVar: "--accent-fiction",
  eleventyComputed: {
    permalink: (data) => `/fiction/${data.page.fileSlug}/index.html`,
  },
};
