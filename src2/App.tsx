import React, {useState} from 'react';
import './App.css';
import {Filter2} from "./5-vidos-pro-method-filter/filter2/Filter2";
import {NewComponent2} from "./6-input/NewComponent2";
import {Filter} from "./5-vidos-pro-method-filter/Filter";
// import {Header} from "./1-vidos-pro-vlogennie-componenti/site/Header";
// import {Body} from "./1-vidos-pro-vlogennie-componenti/site/Body";
// import {Footer} from "./1-vidos-pro-vlogennie-componenti/site/Footer";
// import {NewComponent} from "./2-vidos-pro-method-map/NewComponent";

const App = () => {
    // const [students, setStudents] = useState([
    //         {id: 1, name: "James", age: 8},
    //         {id: 2, name: "Robert", age: 18},
    //         {id: 3, name: "John", age: 28},
    //         {id: 4, name: "Michael", age: 38},
    //         {id: 5, name: "William", age: 48},
    //         {id: 6, name: "David", age: 58},
    //         {id: 7, name: "Richard", age: 68},
    //         {id: 8, name: "Joseph", age: 78},
    //         {id: 9, name: "Thomas", age: 88},
    //         {id: 10, name: "Charles", age: 98},
    //         {id: 11, name: "Christopher", age: 100},
    //     ]
    // )

    return (
        <div className={"App"}>
            {/*<Header title={"NEW HEADER"}/>*/}
            {/*<Body titleForBody={"NEW BODY"}/>*/}
            {/*<Footer titleForFooter={"NEW FOOTER"}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<Filter/>*/}
            {/*<Filter2/>*/}
            {/*<NewComponent2/>*/}
            <Filter/>
        </div>
    );
}

export default App;
