import React from 'react';
import { topics } from '../data/Data';
import ListItem from './ListItem';

function Category(props) {

    const renderCategories = () => {
        const topicsArr = [];
        let index = 0;

        for (let topic in topics) {
            if (props.name.toLowerCase() === topic) {
                for (let subject in topics[topic]) {
                    topicsArr.push(
                        <ListItem key={index} category={subject}/>
                    )
                    index++;
                }
                // topics[props.name.toLowerCase()].map((subject, index) => {
                //     topicsArr.push(
                //         <ListItem key={index} category={subject}/>
                //     )
                // })
            }
        }
        return topicsArr;
    }

    return(
        <div>
            <h2>Select a subject</h2>
            {renderCategories()}
        </div>
    )
}

export default Category;