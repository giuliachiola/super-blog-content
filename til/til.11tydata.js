module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "til",
  date: "Last Modified",
  permalink: 'posts/{{ title | slug }}/',
})
