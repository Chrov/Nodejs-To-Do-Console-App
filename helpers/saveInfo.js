const fs = require('fs');

const file = './DB/data.json' 

const DBWriter = ( data ) => {

    fs.writeFileSync( file, JSON.stringify( data ) );

}

const DBReader = () => {
    
    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    const data = JSON.parse( info )
    

    return data;
}



module.exports = {
    DBWriter,
    DBReader,
}