module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "tutorials",
  date: "Last Modified",
  tags: 'post',
  paletteColor: Math.floor((Math.random() * 5) + 1),
})
