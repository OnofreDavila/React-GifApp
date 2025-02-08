import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

  const [categories, setCategories] = useState([ ]);

  const onAddCategory = ( newCategory ) => {
    //validar 

    if( categories.find(category => category.toLowerCase() === newCategory.toLowerCase()) ) return;

    // actualizar categories

    setCategories([ newCategory, ...categories ]);
  }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        //setCategories= { setCategories }
          onNewCategory = { event => onAddCategory(event)}
        />

        {categories.map( category => {
              return (
                <GifGrid 
                  key={ category }
                  category={ category }
                />
              )
            })
        }
    </>
  )
}
