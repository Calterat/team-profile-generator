const checkRole = member => {
    switch (member.getRole()) {
        case 'Manager': return `<p>Office Number: ${member.getOfficeNumber()}</p>`
        case 'Engineer': return `<p>Github Username: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>`
        case 'Intern': return `<p>School: ${member.getSchool()}</p>`
        default: return ``
    }
}

const generateCards = (team) => {
    return `
        <div class="row justify-content-center">
            ${team
                .map((member) => {
                    return `
                    <div class="card col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-3 text-center bg-warning shadow" style="padding-right: 0px; padding-left: 0px">
                        <div class="card-body">
                            <h3 class="card-title border-bottom border-danger mb-3">${member.getRole()}</h3>
                            <h5 class="card-text mb-3">Name: ${member.getName()}</h5>
                            <p class="card-text">ID: ${member.getId()}</p>
                            <p class="card-text">E-mail: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" integrity="sha512-oc9+XSs1H243/FRN9Rw62Fn8EtxjEYWHXRvjS43YtueEewbS6ObfXcJNyohjHqVKFPoXXUxwc+q1K7Dee6vv9g==" crossorigin="anonymous" />
        </head>

        <body>
            <header>
                <nav class="navbar navbar-light bg-danger">
                    <div class="container-fluid justify-content-center">
                        <h1 class="text-center bold lead display-4">THE CREW</h1>
                    </div>
                </nav>
            </header>
            <main>
                ${generateCards(team)}
            </main>
            <footer class="container text-center py-3">
                <p class="text-center py-3">&copy; ${new Date().getFullYear()} by Julian</p>
            </footer>
        </body>

    </html>
    `;
};