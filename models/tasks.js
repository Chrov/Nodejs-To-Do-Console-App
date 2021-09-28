const Task = require("./task");


class Tasks {
    

    //List on object format
    _list = {};

    get listArray(){
        
        //List on array format
        const list = [];

        //Transfer each task to the array list.
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];

            list.push( task )
        })
        return list;
    }

    constructor() {
        this._list = {};
    }

    deleteTask( id = ''){
        if(this._list[id]){
            delete this._list[id]
        }
    }


    loadTaskFromArray( tasks = []) {

        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    //Task creator
    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }


    completeList(){

        console.log();
    
        this.listArray.forEach( (task, i) => {
            
            const index = `${i + 1}`.green;
            const {desc, completedIn} = task;
            const state = (completedIn) ? 'complete'.green : 'Pending'.red;

            console.log(`${index} ${desc} :: ${state.brightGreen}`)
        });
    }


    listCompleteAndPendingTasks( completed = true){
        
        console.log();

        const filtred = this.listArray.filter( task => !!task.completedIn === completed )

        filtred.forEach( (task, i) => {
            
            const index = `${i + 1}`.green;
            const {desc, completedIn} = task;
            const state = (completedIn) ? `>> ${completedIn.brightGreen}` : 'Pending'.brightRed;


            console.log(`${index} ${desc} :: ${state}`)
        });
    }


    toggleCompleted(ids = []){

        ids.forEach( id => {
            const task = this._list[id];
            if( !task.completedIn ){
                task.completedIn = new Date().toISOString();
            }

        });

        this.listArray.forEach( task => {

            if ( !ids.includes(task.id) ) {
                this._list[task.id].completedIn = null;
            }
        })
    }

  

    // Resolving by force.
    // date = '';

    // validator(element) {
    //     let state = ''

    //     if(element.completedIn){
    //         state = 'Completed'
    //         this.date = `>> ${element.completedIn}`;
    //         return state;
    //     } else {
    //         state = 'Pending'
    //         this.date = ''
    //         return state;
    //     }

    // }

    // dateValidator(element){

        
    // }

    // completeList() {
    //     let i = 0;
    //     this.listArray.forEach( e => {
    //         console.log(
    //             `${i++}. ${e.desc} :: ${this.validator(e)} ${this.date}`
    //             )

    //     })
    
    // }
}


module.exports = Tasks;