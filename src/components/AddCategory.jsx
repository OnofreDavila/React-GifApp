import { useState } from "react"

export const AddCategory = ( {onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) =>{
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        /** trim sirve para eliminar los espacio de adelante y atras */
        //if de validacion
        if ( inputValue.trim().length <= 1){
            return;
        }
        //setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');

    }


  return (
        <form onSubmit= { (event) => onSubmit(event) }>
            <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
            />
        </form>
  )
}
