module.exports = async () => ({
  layout: "layouts/post.njk",
  date: "Last Modified",
  category: "projects",
  permalink: 'projects/{{ title | slug }}/',
  paletteColor: Math.floor((Math.random() * 5) + 1),
})
