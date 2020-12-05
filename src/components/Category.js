import React from 'react';

function Category(props) {

    const { match: {params: {category}} } = props.category;

    return(
        <div>
            This is the {category} page.
        </div>
    )
}

export default Category;