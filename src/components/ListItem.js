import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {

    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(props);

    return(
        <div>
            <Link to={props.link}>
            <p>{capitaliseFirstLetter(props.category)}</p>
            <div className="img-container">   
                <img src={'../images' + props.imgUrl} alt="broken"/>
            </div>
            </Link>
        </div>
        
    )
}

export default ListItem;