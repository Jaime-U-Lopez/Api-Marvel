import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.scss";

export default function Header(props) {

//para saber la localizacion de la pagina o en que pagina se esta o ruta
const currenPath = useLocation();


// en esta contante estamo usanando la constante anterior. con una propiedad y con una funcion implicita de
// de javascrip que consiste en lo que se tiene o en la ruta actual y a la que queremos cambiar.

//esto tiene varias funcionalidades
const finalCurrenPath = currenPath.pathname.replace("/" ,"")
    


//con ese use estate, lo que hacemos es cacturar el onclick y con e y el objeto name del elemento 
//menu item 


const [activeClick,setActiveClicks]= useState(finalCurrenPath)    

//para saber la url que se tenia anteriormente 
const history=useNavigate();



const  handletItemClick = (e,{name}) => {

    setActiveClicks(name)
    //con esta linea lo que hacemos es colocar en la ruta el nombre del item. lo cual nos redirige 
    //a la pagina correspondiente
   history(name)
}

    return(
    <div  className="header-menu">

        <Menu secondary>

            <Menu.Item name="inicio"  active={activeClick==="inicio"}  onClick={handletItemClick}/>
            <Menu.Item name="series"   active={activeClick==="series"} onClick={handletItemClick}/>
            <Menu.Item name="comics"  active={activeClick==="comics"}  onClick={handletItemClick}/>
        
        </Menu>
        
    </div>)
    
};

