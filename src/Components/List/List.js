import React from 'react';

const List = (props) => {
    const { list } = props;
    return (
        <div>
            <h1>Orders</h1>

            <p>Name: {list.name}</p>
        </div>
    );
};

export default List;