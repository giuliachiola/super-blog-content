module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "tutorials",
  date: "Last Modified",
  permalink: 'posts/{{ title | slug }}/',
  tags: 'post',
})
