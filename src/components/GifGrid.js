import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs'

// import {GifGridItem} from './GifGridItem'
// import {getGif} from '../helpers/getGif'


const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs();

    console.log(loading)
    console.log(data)

    // const [images, setimages]= useState([]);

    //Ejecuto la funcion http en useEffect que funciona como
    //DidunMount - se monta una sola vez al inicio

    // useEffect(()=>{
    //     getGif(category)
    //     .then(setimages); 
    // },[category])

      

    return (
        <>
            <h3>{category}</h3>

            {loading ? 'Cargando...':'Data cargada'}
        {/* <div className="card-grid">
          
                {images.map(img=>
                    <GifGridItem 
                    key={img.id}
                    // img={img} 
                    {...img} //mando la info como un objeto
                    />
                    // <li key={img.id}>{img.title}</li>
                )}
            
        </div> */}
        </>
    )
}

export default GifGrid;