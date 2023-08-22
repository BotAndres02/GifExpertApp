import { ChangeEvent, FormEvent, useState } from 'react';
import { AddCategoryProps } from './components.types';


export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event: FormEvent ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}




