const { spawn } = require('child_process');
const fs = require('fs');

process.chdir("../")
const exec = (cmd) => {
    // Spawn a PowerShell process
    const powershell = spawn('cmd', ['/c', cmd]);

    // Set encoding for stdout and stderr
    powershell.stdout.setEncoding('utf-8');
    powershell.stderr.setEncoding('utf-8');

    // Listen for data events on stdout
    powershell.stdout.on('data', (data) => {
        console.log(data);
    });

    // Listen for data events on stderr
    powershell.stderr.on('data', (data) => {
        console.error(data);
    });

    // Listen for the 'close' event
    powershell.on('close', (code) => {
        console.log(`exit code : ${code}`);
    });
};

fs.rmSync("public/image", {recursive: true})
cmd=(/* sh */`
npm i
npx sequelize-cli db:drop # delete a database
npx sequelize-cli db:create # create a database
npx sequelize-cli db:migrate # migrate a database structure
npx sequelize-cli db:seed:all # create admin account
`)
cmd=cmd.substring(1, cmd.length-1).replace(/#[^\n\r]*/g, '') .replace(/\n/g, " && ")
console.log(cmd)
exec(cmd)
fs.mkdirSync("public/image")

// /* sh */ `
// npx sequelize-cli db:drop # delete a database
// `

// /* sh */`
// npx sequelize-cli db:create # create a database
// npx sequelize-cli db:migrate # migrate a database structure
// npx sequelize-cli db:seed:all # create admin account
// `;
