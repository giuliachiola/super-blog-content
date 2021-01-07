module.exports = async () => ({
  layout: "layouts/post.njk",
  category: "projects",
  date: "Last Modified",
  category: "projects",
  permalink: 'projects/{{ title | slug }}/',
})
