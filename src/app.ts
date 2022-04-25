import {createServer} from './utils/server'
import logger from '@exmpl/utils/logger'

createServer()
    .then( server => {
        server.listen(3000, ()=>{
            logger.info(`Listening on http://localhost:3000`)
        })
    }
    
    )
    .catch( err =>{
        logger.error(`Error: ${err}`)
    })
    


