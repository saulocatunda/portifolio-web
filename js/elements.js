const repoGit = document.querySelector('.project')
const languageProject = document.querySelector('.language')
const branchProject = document.querySelector('.branchCounts')
const starsProject = document.querySelector('.starCounts')
const nameProject = document.querySelector('.nameProject')
const descriptionProject = document.querySelector('.projectDescription')
const projectsCard = document.querySelector('.projects')

var keyApi =
  'https://api.github.com/users/SauloCatunda/repos'

var keyApiToken = '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'
export {
  repoGit,
  languageProject,
  branchProject,
  starsProject,
  nameProject,
  descriptionProject,
  projectsCard,
  keyApiToken,
  keyApi
}
