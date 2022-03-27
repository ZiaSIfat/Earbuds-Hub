import React from 'react';
import './List.css'
const List = (props) => {
    const { list } = props;
    return (
        <div className='listed-items'>
            <h2>Selected Items</h2>
            <h4>Name: {list.map(item => item.name)}</h4>
        </div>
    );
};

export default List;