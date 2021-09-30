import {useState} from 'react';
import Item from './Item';
import {v4 as uuidv4 } from 'uuid';


export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "promener le chien", id: uuidv4()},
        {txt: "sport", id: uuidv4()},
        {txt: "cuisine", id: uuidv4()},
        
    ])

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState);
    }

    const addTodo = e => {
        e.preventDefault();
    }

    const linkedInput = e => {
        setStateInput(e)
    }

    return (
        <div className="m-auto px4 col12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                onInput={e => linkedInput(e.target.value)} 
                type="text" className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc = {deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}