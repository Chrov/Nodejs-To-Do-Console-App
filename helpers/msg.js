require('colors');


const showMenu = () => {
  

    return new Promise( resolve => {  
    
    console.clear();

    console.log('=============================='.green)
    console.log('Select an option.'.brightYellow)
    console.log('==============================\n'.green)
    
    console.log(`${'1.'.brightGreen} Create Task`);
    console.log(`${'2.'.brightGreen} List Tasks`);
    console.log(`${'3.'.brightGreen} List Complete Tasks`);
    console.log(`${'4.'.brightGreen} List Pending Task`);
    console.log(`${'5.'.brightGreen} Complete Tasks`);
    console.log(`${'6.'.brightGreen} Delete Task`);
    console.log(`${'0.'.brightGreen} Exit\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question('Select an option: ', (opt) =>{
        readline.close();
        resolve(opt);
    })
        
    })
}




//     const pause = () => {

//     return new Promise(resolve => {
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout,
//             });
    
//         readline.question(`\nPress ${'ENTER'.brightYellow} to continue\n`, (opt) =>{
//             readline.close();
//             resolve();
//         })
//     })
// }





module.exports = {
    showMenu,
    pause 
}