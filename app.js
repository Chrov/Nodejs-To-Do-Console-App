//Package imports
require('colors'); 

//Files Imports
const { 
    inquirerMenu,
    pause,
    readInput,
    eraser,
    confirm,
    showCheckList

} = require('./helpers/inquirer');
const { DBWriter, DBReader } = require('./helpers/saveInfo');
const Tasks = require('./models/tasks');


//Creating a main function.
const main = async () => {

    let opt = ''; 
    const tasks = new Tasks();

    const DBTasks = DBReader();

    
    if( DBTasks ){
        tasks.loadTaskFromArray( DBTasks );
    }
    


    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                break;
            
            case '2':
                tasks.completeList()
                break;
            
            case '3':
                tasks.listCompleteAndPendingTasks(true)
                break;
            
            case '4':
                tasks.listCompleteAndPendingTasks(false)
                break;

            case '5':
                const ids = await showCheckList(tasks.listArray);
                tasks.toggleCompleted( ids );
                break;

            case '6':
                const id = await eraser( tasks.listArray ); 
                if(id !== 0){
                    const eraserConfirm = confirm('Delete task?')
                        if(eraserConfirm) {
                            tasks.deleteTask( id );
                            console.log('Deleted Task')
                        }

                }

                break;
        }
        

        DBWriter( tasks.listArray );

        
        console.log('\n')
        

        await pause()

    } while(opt  !== '0'){

    }

    
    // pause();

}


main()