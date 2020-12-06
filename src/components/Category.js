import React from 'react';
import { topics } from '../data/Data';
import ListItem from './ListItem';

function Category(props) {

    const renderCategories = () => {
        const topicsArr = [];
        let index = 0;
        let search = props.name.toLowerCase();

        for (let topic in topics) {
            if (search === topic) {
                for (let subject in topics[topic]) {
                    topicsArr.push(
                        <ListItem key={index} category={subject} link={`${search}/${subject}`}/>
                    )
                    index++;
                }
            }
        }
        return topicsArr;
    }

    return(
        <div>
            <h2>Select a subject</h2>
                <div className="cat-container">
                {renderCategories()}    
                </div>   
        </div>
    )
}

export default Category;