const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt([
    {
        type: 'input',
        message: 'team manager name:',
        name: 'managerName'
        
    },
    {
        type: 'input',
        message: 'team manager email:',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'team manager employee ID:',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'team manager office number:',
        name: 'managerOfficeNum'
    },
    {
        type: 'list',
        message: 'additional team members:',
        choices: ['engineer', 'intern', 'none'],
        name: 'moreEmployees'
    }
])

.then((response)=>{
    const managerName = response.managerName
    const managerEmail = response.managerEmail
    const managerId = response.managerId
    const managerOfficeNum = response.managerOfficeNum

    if(response.moreEmployees === 'engineer'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'engineer name:',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'engineer employee id:',
                name: 'engineerId'
            },
            {
                type: 'input',
                message: 'engineer email:',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'engineer github username:',
                name: 'engineerGihubUsername'
            },
            {
                type: 'input',
                message: 'engineer github profile link:',
                name: 'engineerGithubLink'
            },
            {
                type: 'list',
                message: 'additional team members:',
                choices: ['engineer', 'intern', 'none'],
                name: 'moreEmployees'
            }

        ])
    }
})

