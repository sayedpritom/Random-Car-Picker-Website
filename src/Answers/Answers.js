import React from 'react';
import './Answers.css';
const Answers = () => {
    return (
        <div className='Answers'>
            <div className="how_react_works">
                <h3>How React Works:</h3>
                <hr />
                <p>
                React is an open-source Javascript library for building single-page web applications with declarative code. It allows us to create reusable UI components which comes very handy while building large applications where the same UI kits are used multiple times. React maintains a virtual DOM tree. That tree is used for effectively re-construct HTML DOM through Javascript and to push only the changes to the DOM which have actually occurred. In the process, JSX is a syntactic sugar used for creating specific Javascript objects. <br />
                First JSX syntax is parsed into javascript object. <br />

                Then react renders the javascript object with ReactDOM and recursively creates nodes based on their 'type' property and finally appends them to the DOM.
                </p>
            </div>
            <div className="props_vs_state">
                <h3>Difference between props and state:</h3>
                <hr />
                <ol>
                    <li>Props(short for properties) are a Components configuration. Whereas state is a hook in functional react component, which is a data structure that resets its value with user's input.</li>
                    <li>Props use unidirectional data flow or one-way data binding and props are immutable whereas state is mutable.</li>
                    <li>Props are used to pass data and state is used inside props to pass down data.</li>
                    <li>Props offers great performance but state is pretty slow</li>
                    <li>State is limited to the current component. But props can be passed to any child-to-child components from its parent components.</li>
                </ol>
            </div>
        </div>
    );
};

export default Answers;