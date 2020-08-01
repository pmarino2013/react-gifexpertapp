import {useState, useEffect} from 'react'
import {getGif} from '../helpers/getGif'

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState(
        {
            data:[],
            loading:true
        }
    )

     useEffect(()=>{
        getGif(category)
        .then(imgs=>{

         
                setstate({
                    data:imgs,
                    loading:false
                })
                
            

        }); 
    },[category])


    // setTimeout(()=>{
    //     setstate(
    //         {
    //             data:[1,2,3,4,5,6,7],
    //             loading:false
    //         }
    //     )
    // }, 3000)

    return state;
}
