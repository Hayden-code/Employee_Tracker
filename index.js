const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});
connection.connect();

runApp();
async function runApp() {
  const data = await inquirer.prompt({
    type: "checkbox",
    name: "firstAction",
    message: "What would you like to do?",
    choices: [
      "View all employees.",
      "View employees by department.",
      "View all employees by manager.",
      "Add employee.",
      "Remove employee.",
      "Update employee role,",
      "Update employee manager",
      "Exit",
    ],
  });

  if (data.firstAction == "View all employees.") {
    printTable("all");
  } else if (data.firstAction == "View employees by department.") {
    printTable("department");
  } else if (data.firstAction == "View all employees by manager.") {
    printTable("manager");
  } else if (data.firstAction == "Add employee.") {
    addEmployee();
  } else if (data.firstAction == "Remove employee.") {
    removeEmployee();
  } else if (data.firstAction == "Update employee role,") {
    updateEmployee();
  } else if (data.firstAction == "Update employee manager") {
    updateEmployeeManager();
  } else if (data.firstAction == "Exit") {
    console.log("Disconnecting from server...");
    connection.end();
  }
}

// Printing table function
function printTable(chosenTable) {
  // Print all employees.
  if (chosenTable == "all") {
    console.log("Loading table of all employees...");
    connection.query(
      `SELECT employee.employee_id, employee.first_name, employee.last_name, employee_role.title, employee_role.salary, department.department_name, employee.manager_id FROM ((employee INNER JOIN employee_role ON employee.role_id = employee_role.role_id) INNER JOIN department ON employee_role.department_id = department.department_id);`,
      function (err, res) {
        if (err) throw err;
        console.table("All Employees", res);
        runApp();
      }
    );
  }
  // Print employees from certain departments
  else if (chosenTable == "department") {
    depArr = [];
    connection.query(
      "SELECT department_name FROM department",
      (error, results) => {
        if (error) throw error;
        for (i = 0; i < results.length; i++) {
          depArr.push(results[i].department_name);
        }
      }
    );
    console.log(depArr);
    inquirer.prompt({
      type: "checkbox",
      name: "department",
      message: "Choose department.",
      choices: depArr,
    });
    console.log("Loading table of all employees by department...");
    runApp();
  }
  // Print according to Managers
  else if (chosenTable == "manager") {
    console.log("Loading table of all employees by manager...");
    runApp();
  }
}

function addEmployee() {
  connection.query("SELECT * FROM employee_role", (err, res) => {
    if (err) throw err;
    let roleArray = [];
    for (i = 0; i < res.length; i++) {
      roleArray.push(res[i].title);
    }
    console.log(roleArray);
    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter employee first name.",
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter employee last name.",
        },
        {
          name: "roleId",
          type: "checkbox",
          message: "Enter employee role",
          choices: roleArray,
        },
      ])
      .then(function (data) {
        connection.query("INSERT INTO employee ?", {
          first_name: data.firstName,
          last_name: data.lastName,
          role_id: data.roleId,
        });
      });
  });
}
