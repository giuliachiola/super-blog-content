module.exports = async () => ({
  category: "projects",
  // this url is never called because at the moment does not exists a single page for each projects, but I prefer to have a clean `_site` directory with `projects/[nameofproject]`
  permalink: 'projects/{{ title | slug }}/',
})
