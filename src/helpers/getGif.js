import axios from 'axios';

export const getGif= async(category)=>{
    const url=`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf`
    const {data} = await axios.get(url)
    try {
        console.log('OK')
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

    // console.log(gifs)

    return gifs;

}
