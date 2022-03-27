import React from 'react';
import './List.css'
const List = (props) => {
    const { list } = props;
    return (
        <div className='listed-items'>
            <h2>Selected Items</h2>
            {
                list.map(item => <h4>Name: {item.name}</h4>)

            }
            <button className='list-btn'>Choose One</button>
            <br /><br />
            <button className='list-btn'>Reset</button>
        </div>
    );
};

export default List;