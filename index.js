const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const { type } = require("os");

const team = [];

//need a function for create manager
const createTeamManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "tmName",
        message: "What is your Team Manager's name?",
      },
      {
        type: "input",
        name: "tmId",
        message: "What is your Team Manager's employee ID?",
      },
      {
        type: "input",
        name: "tmEmail",
        message: "What is your team manager's email address?",
      },
      {
        type: "input",
        name: "tmOffice",
        message: "What is your team manager's office number?",
      },
    ])
    .then((ans) => {
      const manager = new Manager(
        ans.tmName,
        ans.tmId,
        ans.tmEmail,
        ans.tmOffice
      );
      team.push(manager);
      console.table(team);
      addTeammate();
    });
};

const addTeammate = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addteammate",
        message: "What would you like to do?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building your team",
        ],
      },
    ])
    .then((ans) => {
      switch (ans.addTeammate) {
        case "Add an engineer":
          createEngineer();
          break;
        case "Add an intern":
          createIntern();
          break;
        case "Finish building your team":
          console.log(team);
      }

      console.log(ans);
    });
};
//need a function for add engineer
const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your Engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your Engineer's employee ID??",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your Engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your Engineer's github profile?",
      },
    ])
    .then((ans) => {
      const engineer = new Engineer(
        ans.engineerName,
        ans.engineerID,
        ans.engineerEmail,
        ans.engineerGithub
      );
      team.push(engineer);
      console.table(team);
      addTeammate();
    });
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your Intern's employee ID??",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your Intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school is your intern attending?",
      },
    ])
    .then((ans) => {
      const intern = new Intern(
        ans.internName,
        ans.internID,
        ans.internEmail,
        ans.internGithub
      );
      team.push(intern);
      console.table(team);
      addTeammate();
    });
};
//need a function for add intern
//need a function to close recursion
//need a function to

createTeamManager();
