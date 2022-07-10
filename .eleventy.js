module.exports = function(eleventyConfig) {
const markdownIt = require("markdown-it");
const markdownitwikilinks = require('markdown-it-wikilinks');
    let options = {
		linkify: true
    };
	eleventyConfig.setLibrary("md", markdownIt(options));
    // eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownitwikilinks));
	eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("markdownitwikilinks"));
    eleventyConfig.addPassthroughCopy("src/style.css");
    // Set custom directories for input, output, includes, and data
        return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            // data: "_data",
            output: "_site"
    }
  };
};
