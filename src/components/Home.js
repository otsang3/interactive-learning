import React from 'react';
import { categories } from '../data/Data';
import Category from './Category';

function Home() {

    const renderCategories = () => {
        const categoriesArr = [];
        categories.map((category, index) => categoriesArr.push(
            <Category key={index} category={category}/>
        ));
        return categoriesArr;
    }

    return(
        <div>
            {renderCategories()}
        </div>
    );
}

export default Home;