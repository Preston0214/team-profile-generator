const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./lib/render');
const SAMPLE_DIR = path.resolve(__dirname, 'sample');
const samplePath = path.join(SAMPLE_DIR, 'team.html');
let team = [];

const questions = {
    Manager: [
        {
            type: 'input',
            message: 'team manager name:',
            name: 'employeeName'         
        },
        {
            type: 'input',
            message: 'team manager id:',
            name: 'employeeId'
        },
        {
            type: 'input',
            message: 'team manager email:',
            name: 'employeeEmail'
        },
        {
            type: 'input',
            message: 'team manager office number:',
            name: 'officeNum'
        },
        {
            type: 'list',
            message: 'additional employees:',
            choices: ['yes', 'no'],
            name: 'addNew'
        }
    ],

    Engineer: [
        {
            type: 'input',
            message: 'engineer name:',
            name: 'employeeName'
        },
        {
            type: 'input',
            message: 'engineer id:',
            name: 'employeeId'
        },
        {
            type: 'input',
            message: 'engineer email:',
            name: 'employeeEmail'
        },
        {
            type: 'input',
            message: 'engineer github username:',
            name: 'employeeGithub'
        },
        {
            type: 'list',
            message: 'additional employees:',
            choices: ['yes', 'no'],
            name: 'addNew'
        }
    ],

    Intern: [
        {
            type: 'input',
            message: 'intern name:',
            name: 'employeeName'
        },
        {
            type: 'input',
            message: 'intern id:',
            name: 'employeeId'
        },
        {
            type: 'input',
            message: 'intern email:',
            name: 'employeeEmail'
        },
        {
            type: 'input',
            message: 'intern school:',
            name: 'employeeSchool'
        },
        {
            type: 'list',
            message: 'additional employees:',
            choices: ['yes', 'no'],
            name: 'addNew'
        }
    ]
};

const selectMemberType = [
    {
        type: 'list',
        name: 'memberType',
        message: 'employee role:',
        choices: ['manager', 'engineer', 'intern']
    }
];

function addNewMember() {
    inquirer.prompt(selectMemberType)
        .then(answer => {

            if (answer.memberType === 'manager') {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager
                                (
                                    answer.employeeName,
                                    answer.employeeId,
                                    answer.employeeEmail,
                                    answer.officeNum
                                );

                            team.push(manager);
                            canAddManager = false;
                            if (answer.addNew === 'yes') {
                                addNewMember();
                            } else {
                                generate();
                            }
                        });
            } else if (answer.memberType === 'engineer') {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.employeeName,
                                answer.employeeId,
                                answer.employeeEmail,
                                answer.employeeGithub
                            );
                        team.push(engineer);
                        if (answer.addNew === 'yes') {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });

            } else if (answer.memberType === 'intern') {
                inquirer.prompt(questions.Intern)
                    .then(answer => {
                        const intern = new Intern
                            (
                                answer.employeeName,
                                answer.employeeId,
                                answer.employeeEmail,
                                answer.employeeSchool
                            );
                        team.push(intern);
                        if (answer.addNew === 'yes') {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });
            };
        });
};

addNewMember();

function generate() {
    fs.writeFileSync(samplePath, render(team), 'utf-8');
    process.exit(0);
}