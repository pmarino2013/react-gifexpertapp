import React, {useState} from 'react'
import  AddCategory from './AddCategory'
import GifGrid from './GifGrid';


const GifExpertApp=()=>{

  const [categories, setCategories]=useState ([ 'One Punch'])
    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball']

    // const handleAdd=()=>{

    //     setCategories(
    //         [...categories,'Sailor Moon']
    //     )
    // }

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