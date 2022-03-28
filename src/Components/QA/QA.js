import React from 'react';
import './QA.css';
const QA = () => {
    return (
        <div className='ques-ans'>
            <h1>Question And Answer</h1>
            <div>
                <h4>1.How React works?</h4>
                <p>Ans: React is a very popular JavaScript library.React helps us to build interactve UIs more easily with JSX.JSX is Javascript XML.With JSX one can easily write the html codes in JavaScript.Also we can write JavaScript expressions dynamically in html codes pretty easily.Components are the building block of any React app.It helps to organize and manage codes in a clean way.Props are used to pass data from parent component to child component.State is a special function.It is a hook.States are used to to update data.Use effects are used to fetch data outiside of the code.It connects outside things with the code.</p>
            </div>
            <div>
                <h4>2.Difference between Props and States?</h4>
                <p>Ans: Props are read only and it cant be modified.And states are asynchronus and it can be modified at any time.Props can pass data from one component to other component.In the other hand state cant do that.It holds information. Props can be accessed by the child component but state cannot be accessed by child components.</p>
            </div>
        </div>
    );
};

export default QA;