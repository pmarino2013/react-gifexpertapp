import React,{useState} from 'react';

import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue]=useState('');

    const handleChange=(e)=>{ //Metodo que maneja el evento del cambio cuando
                            //escribo en el input
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //Validar que no sea un string vacio y que tenga 2 letras por lo menos
        if(inputValue.trim().length>2){

            setCategories(cats=>[inputValue, ...cats]) //agrego lo que hay en el input a mi arreglo
            // console.log('se hizo el submit')
            setInputValue('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue} //asigno variable del estado
                onChange={handleChange} //cuando hay un cambio en el input
            >
            </input>
        </form>
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}


export default AddCategory