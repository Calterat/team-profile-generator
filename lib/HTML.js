const checkRole = member => {
    switch (member.getRole()) {
        case 'Manager': return `<p>${member.getOfficeNumber()}</p>`
        case 'Engineer': return `<p><a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></p>`
        case 'Intern': return `<p>${member.getSchool()}</p>`
        default: break;
    }
}

const generateCards = (team) => {
    return `
        <div class="flex-row justify-space-between">
            ${team
                .map((member) => {
                    return `
                    <div class="card text-center" style="width: 18rem;">
                        <div class="card-body">
                            <h4 class="card-title">${member.getRole()}</h4>
                            <h5 class="card-text">${member.getName()}</h5>
                            <p class="card-text">${member.getId()}</p>
                            <p class="card-text><a href="mailto:${member.getEmail()}>${member.getEmail()}</a></p>
                            ${checkRole(member)}
                        </div>
                    </div>
                    `
            }).join('')}
        </div>
    `;
}

// const generateProjects = projectsArr => {
//     return `
//         <section class="my-3" id="portfolio">
//             <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//             <div class="flex-row justify-space-between">
//                 ${projectsArr
//                     .filter(({ feature }) => feature)
//                     .map(({ name, description, languages, link }) => {
//                         return `
//                             <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
//                                 <h3 class="portfolio-item-title text-light">${name}</h3>
//                                 <h5 class="portfolio-languages">
//                                     Built With:
//                                     ${languages.join(', ')}
//                                 </h5>
//                                 <p>${description}</p>
//                                 <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//                             </div>
//                         `;
//                     })
//                     .join('')}

//                 ${projectsArr
//                     .filter(({ feature }) => !feature)
//                     .map(({ name, description, languages, link }) => {
//                         return `
//                             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//                                 <h3 class="portfolio-item-title text-light">${name}</h3>
//                                 <h5 class="portfolio-languages">
//                                     Built With:
//                                     ${languages.join(', ')}
//                                 </h5>
//                                 <p>${description}</p>
//                                 <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//                             </div>
//                         `;
//                     })
//                     .join('')}
//             </div>
//         </section>
//     `;
// }

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>The Crew</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js" integrity="sha512-8qmis31OQi6hIRgvkht0s6mCOittjMa9GMqtK9hes5iEQBQE/Ca6yGE5FsW36vyipGoWQswBj/QBm2JR086Rkw==" crossorigin="anonymous"></script>
        </head>

        <body>
            <header>
                <nav class="navbar navbar-light bg-warning">
                    <div class="container-fluid">
                        <h2 class="navbar-brand justify-content-center">THE CREW</h2>
                    </div>
                </nav>
            </header>
            <main>
                ${generateCards(team)}
            </main>
            <footer class="container text-center py-3">
                <h3 class="text-center py-3">&copy; ${new Date().getFullYear()} by Julian</h3>
            </footer>
        </body>

    </html>
    `;
};