#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("Are you introvert OR extrovert"));

const extrovertTraits: string[] = [
    "hangout with friends",
    "works socially",
    "don't control emotions",
    "learn through experiences",
    "easily make friends",
    "talkative"
];

const introvertTraits: string[] = [
    "live alone",
    "work independently",
    "keep emotions private",
    "learn through observation",
    "very chosse to make friends"
];

interface PersonalityAnswers {
    name: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
}

class Person {
    constructor(public name: string, public personalityType: string) {}

    meet() {
        return `Dear ${this.name}, your personality matches with an ${this.personalityType} person.`;
    }
}

class PersonalityQuiz {
    private answers: string[] = [];
    private extrovertTraits = extrovertTraits;
    private introvertTraits = introvertTraits;

    async startQuiz() {
        const personality: PersonalityAnswers = await inquirer.prompt([
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

    private determinePersonalityType(): string {
        const isIntrovert = this.answers.every(answer => this.introvertTraits.includes(answer));
        const isExtrovert = this.answers.every(answer => this.extrovertTraits.includes(answer));

        if (isIntrovert) {
            return "introvert";
        } else if (isExtrovert) {
            return "extrovert";
        } else {
            return "ambivert (a mix of introvert and extrovert)";
        }
    }
}

const quiz = new PersonalityQuiz();
quiz.startQuiz();
