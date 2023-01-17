const projectsCard = document.querySelector('.projects')

var keyApi =
  'https://api.github.com/users/SauloCatunda/repos?sort=stars&direction=desc&per_page=6&affiliation=owner,collaborator'

export {
  projectsCard,
  keyApi
}
