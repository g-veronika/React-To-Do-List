import {useState} from 'react'
import Item from './Item'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "promener le chien"},
        {txt: "sport"},
        {txt: "cuisine"},

    ])

    return (
        <div className="m-auto px4 col12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return (
                        <Item 
                        txt={item.txt}
                        key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}