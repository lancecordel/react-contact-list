import contact from '../data/contact.json';
import Contacts from './Contacts';
function Main(){

    return(
        <div id='main'>
            {
                
                contact.results.map((currentObject, indexOfCurrentObject) =>{
                    return <Contacts currentObject={currentObject} key={indexOfCurrentObject}/>
                })
            }
            
        </div>
    )
}

export default Main;