module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');

  eleventyConfig.addPassthroughCopy('./src/assets/me.jpg');

  eleventyConfig.addCollection('posts', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
