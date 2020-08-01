import React from 'react';
import axios from 'axios';

const GifGrid = ({category}) => {

    const getGif= async()=>{
        const url='http://api.giphy.com/v1/gifs/search?q=ricky+and+morty&limit=10&api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf'
        const {data} = await axios.get(url)
        try {
            console.log(data.data)
        } catch (error) {
            console.error(error)
        }

        const gifs = data.data.map(img=>{
           return{
               id:img.id,
               title:img.title,
               url:img.images.downsized_medium.url
           }

        })

        console.log(gifs)
    }

    getGif();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;