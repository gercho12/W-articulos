import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import tipo1 from './Assets/tipo1.png';
import cohete from './Assets/tipo2.png';
import tipo2 from './Assets/tipo6.png';
import tipo3 from './Assets/tipo4.png';
import Wave from "./Assets/wave.png";
import tipo4 from "./Assets/tipo5.png";
//import rulito from "./Assets/rulito.png";
//import rulito2 from "./Assets/rulito2.png"
import imgcomp1 from "./Assets/imgcomp1.png";

function Item(props) {
  return(
  <a target="_blank">
    <div className="item">
      <h1> {props.titulo}</h1>
         <p>{props.parrafo}
        </p>
       <img src={props.img} alt="">
      </img>
    </div>
  </a>
  );}

function Inicio() {

    return (
      <div className="contenedor">
      <div className="Header">
        <div className="contenido-header">
          <div className="texto-header">
            <h1 className="texto-title h1">Encontra los mejores trucos y tecnicas sobre informatica moderna </h1>
            <h2 className="h2">Waiver<span className="span1">-articles</span></h2>
          </div>
          <div className="imagen-header">
  
            <img src={tipo1} className="tipo1" hidden="true" draggable="false"/>
            <img src={tipo4} className="tipo4" draggable="false"/>
             <img src={tipo2} className="tipo2" draggable="false"/>
            <img src={tipo3} className="tipo3" draggable="false"
            />
            <img src={Wave} className="wave" draggable="false"/>
            <img src={cohete} id="cohete"className="cohete" draggable="false"/>
          </div>
        </div>
      </div>
  
      <div className="body">
        <div className="contenido-body">
          <div className="titulo-body">
            <h1 className="titulo-articulos">
                Articulos
            </h1>
          </div>
          <div className="articulos">
  
          <Item 
          titulo="7 Generadores de css que necesitas"
          parrafo="Estos son 7 generadores de diseños y componentes de css, totalmente 
           gratuitos, seguros y libres para usar."
           img={imgcomp1}
            />
        
        <Item 
        titulo="bla bla" 
        parrafo="bla bla bla bla"
         img={imgcomp1}
        />

          </div>
        </div>
      </div>
  </div>
    )};

export default Inicio;