module.exports = async () => ({
  layout: "layouts/post.njk",
  date: "Last Modified",
  category: "projects",
  permalink: 'projects/{{ title | slug }}/',
})
