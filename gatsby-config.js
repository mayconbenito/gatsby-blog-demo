module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
  ],
}
