import React from 'react';

type StudentsType = {
    id: number
    name: string
    age: number

}
type NewComponentsType = {
    students: StudentsType[]
}
export const NewComponent = (props: NewComponentsType) => {

    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]

    // return (
    //     <table style={{border: "1px solid black",}}>
    //         {topCars.map((e, i) => {
    //             return (
    //                 <tbody key={i}>
    //                 <tr>
    //                     <th style={{border: "1px solid black"}}> id: {i + 1}</th>
    //                     <td style={{border: "1px solid black"}}> {e.model}</td>
    //                     <td style={{border: "1px solid black"}}> {e.manufacturer}</td>
    //                 </tr>
    //                 </tbody>
    //             )
    //         })}
    //
    //     </table>


    // <ul>
    //     {props.students.map((e, i) => {
    //         return (
    //             <li key={e.id}>
    //                 <span>{e.name} </span>
    //                 <span>age: {e.age}</span>
    //             </li>
    //         )
    //     })}
    // </ul>
    //
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    //
    // return (
    //     <div className={"App"}>
    //         <button onClick={(event) => onClickHandler("I'm Vasya")}>MyYouTubeChanel-1</button>
    //         <button onClick={(event) => onClickHandler("I'm Ivan")}>MyYouTubeChanel-2</button>
    //     </div>
    // );
};