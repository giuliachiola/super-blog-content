module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "tutorials",
  date: "Last Modified",
  // permalink: 'posts/{{ title | slug }}/',
  tags: 'post',
  paletteColor: Math.floor((Math.random() * 5) + 1),
})
