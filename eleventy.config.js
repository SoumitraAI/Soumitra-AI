module.exports = function (eleventyConfig) {
  // Copy CSS and downloadable files (e.g. report PDFs) straight to the site
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/files": "files" });

  // Date shown on posts, e.g. "10 June 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(dateObj)
  );

  eleventyConfig.addFilter("isoDate", (dateObj) =>
    dateObj.toISOString().split("T")[0]
  );

  // Newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/*.md").reverse()
  );
  eleventyConfig.addCollection("reports", (api) =>
    api.getFilteredByGlob("src/research/*.md").reverse()
  );

  // List of every sector tag used across posts and reports
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    api.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!["posts", "reports", "all"].includes(tag)) tags.add(tag);
      });
    });
    return [...tags].sort();
  });

  // Current year for the footer
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
