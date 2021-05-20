const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

inquirer
    .prompt({
        type: 'checkbox',
        name: 'firstAction',
        message: 'what would you like to do?',
        choices: [
            'View all employees.',
            'View employees by department.',
            'View all employees by manager.',
            'Add employee.',
            'Remove employee.',
            'Update employee role,',
            'Update employee manager'
        ]
    })
    .then((data) => {
        if (data.firstAction == 'View all employees.') {
            printTable('all');
        }
        else if (data.firstAction == 'View employees by department.') {
            printTable('department');
        }
        else if (data.firstAction == 'View all employees by manager.') {
            printTable('manager')
        }
        else if (data.firstAction == 'Add employee.') {
            console.log('Function not added yet :(')

            inquirer
                .prompt({
                    //
                })
        }
        else if (data.firstAction == 'Remove employee.') {
            console.log('Function not added yet :(')

            inquirer
                .prompt({
                    //
                })
        }
        else if (data.firstAction == 'Update employee role,') {
            console.log('Function not added yet :(')

            inquirer
                .prompt({
                    //
                })
        }
        else if (data.firstAction == 'Update employee manager') {
            console.log('Function not added yet :(')

            inquirer
                .prompt({
                    //
                })
        }

    })

function printTable(chosenTable) {
    // print table function
    console.log('Function not added yet :(')
    if (chosenTable == 'all') {
        console.log('Loading table of all employees...')
    }
    else if (chosenTable == 'department') {
        console.log('Loading table of all employees by department...')
    }
    else if (chosenTable == 'manager') {
        console.log('Loading table of all employees by manager...')
    }
}