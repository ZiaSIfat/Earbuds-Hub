import React from 'react';
import './List.css'
const List = (props) => {
    const { list } = props;
    // console.log(list.name)
    return (
        <div className='listed-items'>
            <h2>Selected Items</h2>
            {
                list.map(item =>
                    <h4 key={item.id}>Name: {item.name}</h4>)

            }
            <button onClick={() => props.randomItems(props.product)} className='list-btn'>Choose One</button>
            <br /><br />
            <button onClick={() => props.resetBtn(props.product)} className='list-btn'>Reset</button>
        </div>
    );
};

export default List;