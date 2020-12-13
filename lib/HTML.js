const checkRole = member => {
    switch (member.getRole()) {
        case 'Manager': return `<p>Office Number: ${member.getOfficeNumber()}</p>`
        case 'Engineer': return `<p><a href="https://github.com/${member.getGithub()}">Github Username: ${member.getGithub()}</a></p>`
        case 'Intern': return `<p>School: ${member.getSchool()}</p>`
        default: break;
    }
}

const generateCards = (team) => {
    return `
        <div class="flex-row justify-space-between">
            ${team
                .map((member) => {
                    return `
                    <div class="card col-12">
                        <div class="card-body">
                            <h4 class="card-title">${member.getRole()}</h4>
                            <h5 class="card-text">Name: ${member.getName()}</h5>
                            <p class="card-text">ID: ${member.getId()}</p>
                            <p class="card-text><a href="mailto:${member.getEmail()}>E-mail: ${member.getEmail()}</a></p>
                            ${checkRole(member)}
                        </div>
                    </div>
                    `
            }).join('')}
        </div>
    `;
}

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