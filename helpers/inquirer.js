const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option', //Name of the options
        message: 'Select an option'.brightYellow,
        choices: [
            {
                value: '1',
                name: `${'1.'.brightGreen} Create Task`
            },
            {
                value: '2',
                name: `${'2.'.brightGreen} To Do`
            },
            {
                value: '3',
                name: `${'3.'.brightGreen} Completed Tasks`
            },
            {
                value: '4',
                name: `${'4.'.brightGreen} Pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.brightGreen} Complete a Task`
            },
            {
                value: '6',
                name: `${'6.'.brightGreen} Delete Task`
            },
            {
                value: '0',
                name: `${'0.'.brightGreen} Exit`
            },
        ],
    }
];

const  inquirerMenu = async() => {
    
    console.clear();

    console.log('=============================='.green);
    console.log('Select an option.'.brightWhite);
    console.log('==============================\n'.green);


    //Destructuring the option selected by user
    const { option } = await inquirer.prompt(questions);

    //Returning  the user option.
    return option;
}

//Creating a "pause" option, this will stops the program meanwhile the user don't press ENTER key.
const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPress ${'ENTER'.brightGreen} to continue\n`
        }
    ];
    //Waiting for the user interaction.
    await inquirer.prompt(question);
}


//Creating a reader, through this we will read the task. 
const readInput = async(message) => {

    const question = [
        {
            tyoe: 'input',
            name: 'desc',
            message,
            validate(value){
                //Validator
                if(value.length === 0){
                    return 'Please enter a Value';
                }
                return true;
            }
        }
    ];
    //Reader of text:
    const {desc} = await inquirer.prompt(question);
    return desc;
}


const eraser = async( tasks = [] ) => {

    const choices = tasks.map( (task, i) => {

        const index = `${ i + 1 }. `.brightGreen;

        return {
            value: task.id,
            name: `${index} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: `${'0. '.brightGreen} Back`
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions);
    return id

} 

const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok
}


const showCheckList = async( tasks = [] ) => {

    const choices = tasks.map( (task, i) => {

        const index = `${ i + 1 }. `.brightGreen;

        return {
            value: task.id,
            name: `${index} ${task.desc}`,
            checked: (task.completedIn) ? true : false
        }
    });


    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(questions);
    return ids

} 





module.exports = {
    inquirerMenu,
    pause,
    readInput,
    eraser,
    confirm,
    showCheckList

}
