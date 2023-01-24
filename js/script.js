import { projectsCard, keyApi } from './elements.js'

function getApiGitHub() {
  fetch(keyApi, {
    headers: {
      Authorization: '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'
    }
  })
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      var data = await res.json()
      data.map(item => {
        let project = document.createElement('div')
        project.innerHTML = `
        <div class="project card">
          <div class="headerProject">
            <img src="assets/folder.svg" alt="Icone de pasta" />
            <h1 class="nameProject">${item.name}</h1>
          </div>
          <div class="description">
            <p class="projectDescription">
            ${item.description}
            </p>
          </div>
          <div class="footerProject">
            <div class="footerCounts">
              <img src="assets/star.svg" alt="star icon" />
              <p class="starCounts">${item.stargazers_count}</p>
              <img src="assets/git-branch.svg" alt="branch icon" />
              <p class="branchCounts">${item.forks_count}</p>
              <a href="${item.html_url}" rel="noopener" target="_blank"><img src="assets/globe.svg" alt="Globe Icon with a link"></a>
            </div>
            <div class="footerTech">
              <p class="language"><span class="circle"></span> ${item.language}</p>
            </div>
          </div>
        </div>
        `
        projectsCard.appendChild(project)
      })
    })
    .catch(e => console.log(e))
}

getApiGitHub()
