import React, {useState} from 'react'
import  AddCategory from './components/AddCategory' //componente para agregar categorias de busqueda
import GifGrid from './components/GifGrid'; // componente que cargará mis gif en grilla


const GifExpertApp=()=>{

  const [categories, setCategories]=useState ([ 'One Punch'])
  
    return(
        <>
        <h2>GifExpertApp</h2>
        {/* Campo de texto donde se ingresa la categoria a buscar */}
        <AddCategory setCategories={setCategories} />
        <hr/>
        <ol>
            {/*Espacio donde se muestran las tarjetas*/}
            {categories.map(category=>(
                <GifGrid  
                key={category}
                category={category}/>
            //    <li key={category}>{category}</li>
            ))
            }
        </ol>
        </>
    )

}


export default GifExpertApp