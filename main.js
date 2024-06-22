// import inquirer from "inquirer";
// import chalk from "chalk";
// console.log(chalk.green("Are you introvert OR extrovert"));
// let ans : string[] = [];
// let extrovert : string[] = ["hangout with friends", "sociable", "don't control emotions", "learn through experience", "easily make friends", "talkative"];
// let introvert : string[] = ["live alone", "works independently", "keep emotions private", "learn through observation", "very chosse to make friends"];
// let personality = await inquirer.prompt([{
//     name: "name",
//     type: "input",
//     message: "Enter your name please"
// },
// {
//     name: "q1",
//     type: "list",
//     message: "How do you recharge yourself?",
//     choices: ["hangout with friends", "live alone"],
// },
// {
//     name: "q2",
//     type: "list",
//     message: "How do you like to work?",
//     choices: ["work independently", "works socially"],
// },
// {
//     name: "q3",
//     type: "list",
//     message: "How do you keep your emotions?",
//     choices: ["keep emotions private", "don't control emotions"],
// },
// {
//     name: "q4",
//     type: "list",
//     message: "How do you learn in your life?",
//     choices: ["learn through observation", "learn through experiences"],
// },
// {
//     name: "q5",
//     type: "list",
//     message: "How do you make friends?",
//     choices: ["easily make friends", "very chosse to make friends"],
// }])
// ans.push(personality.q1)
// ans.push(personality.q2)
// ans.push(personality.q3)
// ans.push(personality.q4)
// ans.push(personality.q5)
// class person{
//     constructor( public name: string, public behave: string)
// }
// meet(){
//     return `Dear ${this.name} your personality match to the ${this.behave} person`
// }
// const person2 = new
// person(personality.name,"extrovert")
// const person1 = new person(personality.name,"introvert")
// let final: boolean = ans.every(value => introvert.includes(value));
// let final2 = ans.every(value => extrovert.includes(value));
// if (final === true){
//     console.log(person1.meet());
// }
// else if(final2 === true){
//     console.log(person2.meet());
// }
// else {
//     console.log("We can't find your personality");
// };
// import inquirer from "inquirer";
// import chalk from "chalk";
// console.log(chalk.green("Are you introvert OR extrovert"));
// let extrovert: string[] = ["hangout with friends", "works socially", "don't control emotions", "learn through experiences", "easily make friends", "talkative"];
// let introvert: string[] = ["live alone", "work independently", "keep emotions private", "learn through observation", "very chosse to make friends"];
// interface PersonalityAnswers {
//     name: string;
//     q1: string;
//     q2: string;
//     q3: string;
//     q4: string;
//     q5: string;
// }
// let personality: PersonalityAnswers = await inquirer.prompt([
//     {
//         name: "name",
//         type: "input",
//         message: "Enter your name please"
//     },
//     {
//         name: "q1",
//         type: "list",
//         message: "How do you recharge yourself?",
//         choices: ["hangout with friends", "live alone"],
//     },
//     {
//         name: "q2",
//         type: "list",
//         message: "How do you like to work?",
//         choices: ["work independently", "works socially"],
//     },
//     {
//         name: "q3",
//         type: "list",
//         message: "How do you keep your emotions?",
//         choices: ["keep emotions private", "don't control emotions"],
//     },
//     {
//         name: "q4",
//         type: "list",
//         message: "How do you learn in your life?",
//         choices: ["learn through observation", "learn through experiences"],
//     },
//     {
//         name: "q5",
//         type: "list",
//         message: "How do you make friends?",
//         choices: ["easily make friends", "very chosse to make friends"],
//     }
// ]);
// let ans: string[] = [personality.q1, personality.q2, personality.q3, personality.q4, personality.q5];
// class Person {
//     constructor(public name: string, public behave: string) {}
//     meet() {
//         return `Dear ${this.name}, your personality matches with ${this.behave} person`;
//     }
// }
// const personExtrovert = new Person(personality.name, "extrovert");
// const personIntrovert = new Person(personality.name, "introvert");
// let isIntrovert: boolean = ans.every(value => introvert.includes(value));
// let isExtrovert: boolean = ans.every(value => extrovert.includes(value));
// if (isIntrovert) {
//     console.log(personIntrovert.meet());
// } else if (isExtrovert) {
//     console.log(personExtrovert.meet());
// } else {
//     console.log("We can't find your personality");
// }
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("Are you introvert OR extrovert"));
const extrovertTraits = [
    "hangout with friends",
    "works socially",
    "don't control emotions",
    "learn through experiences",
    "easily make friends",
    "talkative"
];
const introvertTraits = [
    "live alone",
    "work independently",
    "keep emotions private",
    "learn through observation",
    "very chosse to make friends"
];
class Person {
    name;
    personalityType;
    constructor(name, personalityType) {
        this.name = name;
        this.personalityType = personalityType;
    }
    meet() {
        return `Dear ${this.name}, your personality matches with an ${this.personalityType} person.`;
    }
}
class PersonalityQuiz {
    answers = [];
    extrovertTraits = extrovertTraits;
    introvertTraits = introvertTraits;
    async startQuiz() {
        const personality = await inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Enter your name please"
            },
            {
                name: "q1",
                type: "list",
                message: "How do you recharge yourself?",
                choices: ["hangout with friends", "live alone"],
            },
            {
                name: "q2",
                type: "list",
                message: "How do you like to work?",
                choices: ["work independently", "works socially"],
            },
            {
                name: "q3",
                type: "list",
                message: "How do you keep your emotions?",
                choices: ["keep emotions private", "don't control emotions"],
            },
            {
                name: "q4",
                type: "list",
                message: "How do you learn in your life?",
                choices: ["learn through observation", "learn through experiences"],
            },
            {
                name: "q5",
                type: "list",
                message: "How do you make friends?",
                choices: ["easily make friends", "very chosse to make friends"],
            }
        ]);
        this.answers = [personality.q1, personality.q2, personality.q3, personality.q4, personality.q5];
        const personalityType = this.determinePersonalityType();
        const person = new Person(personality.name, personalityType);
        console.log(person.meet());
    }
    determinePersonalityType() {
        const isIntrovert = this.answers.every(answer => this.introvertTraits.includes(answer));
        const isExtrovert = this.answers.every(answer => this.extrovertTraits.includes(answer));
        if (isIntrovert) {
            return "introvert";
        }
        else if (isExtrovert) {
            return "extrovert";
        }
        else {
            return "ambivert (a mix of introvert and extrovert)";
        }
    }
}
const quiz = new PersonalityQuiz();
quiz.startQuiz();
