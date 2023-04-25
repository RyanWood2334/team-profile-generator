const inquirer = require("inquirer");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const fs = require("fs");
const { type } = require("os");

const team = [];

//need a function for create manager
const createTeamManager = () => {
  inquirer
    .createPromptModule([
      {
        type: "input",
        name: "tmName",
        message: "What is your Team Manager's name?",
      },
      {
        type: "input",
        name: "tmId",
        message: "What is your Team Manager's employee ID??",
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
        ans.tmID,
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
    .createPromptModule([
      {
        type: "list",
        name: "addteammate",
        message: "What would you like to do?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "finish building your team",
        ],
      },
    ])
    .then((ans) => {
      console.log(ans);
    });
};
//need a function for add engineer
//need a function for add intern
//need a function to close recursion
//need a function to

createTeamManager();
