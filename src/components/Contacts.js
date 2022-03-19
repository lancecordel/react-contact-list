// import contact from '../data/contact.json';
function Contacts(props){
    return(
        <>
            <div id='contactframe'>
                <div id='imageframe'>
                    <img src={props.currentObject.picture.large} alt='Avatar' height='70'/>
                </div>

                <div id='info'>
                    <p id='name'>{props.currentObject.name.first} {props.currentObject.name.last}</p>
                    <p class='phone'>Home: {props.currentObject.phone}</p>
                    <p class='phone'>Cell: {props.currentObject.cell}</p>
                </div>
                <div id='symbol'>
                    <br></br>
                    <p>&#8827;</p>
                </div>
            </div>
        </>
    )
}

export default Contacts;
