const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const generateHtml = require("./util/generateHtml");
const { type } = require("os");
const { log } = require("console");

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
      console.log(team);
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
      console.log(ans.addteammate);
      //need a function to close recursion
      switch (ans.addteammate) {
        case "Add an engineer":
          console.log("create engineer selected!");
          createEngineer();
          break;
        case "Add an intern":
          console.log("create intern selected!");
          createIntern();
          break;
        case "Finish building your team":
          console.log(team);
          const teamHtml = generateHtml(team);

          fs.writeFile("index.html", teamHtml, (err) => {
            if (err) {
              console.log("something has gone wrong");
              throw err;
            } else console.log("success!");
          });
          break;
        default:
          console.log("something is broken");
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
        message: "What is your Engineer's employee ID?",
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
        ans.engineerId,
        ans.engineerEmail,
        ans.engineerGithub
      );
      team.push(engineer);
      console.log(team);
      addTeammate();
    });
};

//need a function for add intern
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
        message: "What is your Intern's employee ID?",
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
        ans.internId,
        ans.internEmail,
        ans.internSchool
      );
      team.push(intern);
      console.log(team);
      addTeammate();
    });
};

createTeamManager();
