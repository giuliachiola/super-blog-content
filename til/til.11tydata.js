module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "til",
  date: "Last Modified",
  tags: 'post',
  paletteColor: Math.floor((Math.random() * 5) + 1),
})
