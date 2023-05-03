import React from 'react';
import Pdf from "react-to-pdf";


const Blogs = () => {
    const ref = React.createRef();

    return (


        <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 mb-10' ref={ref}>

            <Pdf targetRef={ref} filename="code-example.pdf" >
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <h1 className=' mt-4 text-2xl'>What is the differences between uncontrolled and controlled components.?</h1>
            <p className='pb-8 pt-1'>Controlled components are those in React that have their state and behavior managed by the parent component. The state and behavior of these components are updated by the props that are handed down from the parent component. Components that control their own state internally are known as uncontrolled components.In controlled component allows validation control one the other hand uncontrolled component does not allow validation control.Controlled component control better over the form elements and data .Uncontrolled component control limited  over the form elements and data. </p>


            <h1 className='text-2xl'>How to validate React props using PropTypes?</h1>
            <p className='pb-8 pt-1'>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.Install the PropTypes package by running npm install prop-types in  project directory.Import PropTypes at the top of  component file.When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console
                If default props are set for the React component, the values are first resolved before type checking against propTypes. Therefore, default values are also subject to the prop type definitions.</p>


            <h1 className='text-2xl'>What is the difference between nodejs and express js?</h1>
            <p className='pb-8 pt-1'>JavaScript code may be run outside of a browser using the open-source, cross-platform Node.js framework.Node.js has a rich set of built-in modules that provide functionality for common tasks such as file I/O, networking, and cryptography.Node.js can be used to build a wide range of applications, including web applications, command-line tools, and desktop applications. Express. js is used to create full-featured online applications, including APIs and single-page, multi-page, and hybrid websites.Express.js is a lightweight and flexible web application framework for Node.js.Express.js is highly customizable and allows developers to choose from a wide range of third-party middleware and plugins to extend its functionality.</p>


            <h1 className='text-2xl'>What is a custom hook, and why will you create a custom hook?</h1>
            <p className='pb-8 pt-1'>A custom hook is a JavaScript function that makes use of one or more of the built-in React hooks as well as additional JavaScript functions to encapsulate reusable functionality in a form that can be easily shared between components. A more modular and composable approach to reuse sophisticated logic can be implemented with the help of custom hooks.The main reason to write a custom hook is for code reusability.A custom hook does not require a specific signature.</p>
        </div>
    );
};

export default Blogs;