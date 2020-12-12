const generateCards = (team) => {
   return `<p> ${team} <p>`;
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
    // destructure projects and about data from templateData based on their property key names
    // const { projects, about, ...header } = templateData;

    // console.log(projects, about, header);

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
                <div class="row">
                        ${generateCards(team)}
                </div>
            </main>
            <footer class="container text-center py-3">
                <h3 class="text-center py-3">&copy; ${new Date().getFullYear()} by Julian</h3>
            </footer>
        </body>

    </html>
    `;
};