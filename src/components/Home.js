import React from 'react';
import { categories } from '../data/Data';
import ListItem from './ListItem';

function Home() {

    const renderCategories = () => {
        const categoriesArr = [];
        categories.map((category, index) => categoriesArr.push(
            <ListItem key={index} category={category} link={category}/>
        ));
        return categoriesArr;
    }

    return(
        <div>
            <h2>Select a Topic</h2>
            <div className="cat-container">
                {renderCategories()}
            </div>
        </div>
    );
}

export default Home;