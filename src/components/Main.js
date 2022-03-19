import contact from '../data/contact';
import Contacts from './Contacts';
function Main(){

    return(
        <div id='main'>
            {
                
                contact.map((currentObject, indexOfCurrentObject) =>{
                    return <Contacts currentObject={currentObject} key={indexOfCurrentObject}/>
                })
            }
            
        </div>
    )
}

export default Main;