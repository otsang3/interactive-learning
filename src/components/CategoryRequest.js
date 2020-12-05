import React from 'react';
import { categories } from '../data/Data';
import Category from './Category';

function CategoryRequest(props) {

    const { match: {params: {name}} } = props.name;

    const handleRequest = () => {

        for (let category of categories) {
            if (name.toLowerCase() === category) {
                return (
                    <Category name={name}/>
                )
            }
        }
        return <p>invalid request</p>
    }

    return(
        <div>
            {handleRequest()}
        </div>
    )
}

export default CategoryRequest;