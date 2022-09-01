import React , { Fragment, useState }from 'react';
import { properties, baseFetchRequestUrl } from '../properties';

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(
                baseFetchRequestUrl + "/todos", 
                {
                    method: "POST",
                    headers: properties.appDefaultJsonHeader,
                    body: JSON.stringify(body)
                }
            );
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className='d-flex mt-5' onSubmit={e => onSubmitForm(e)}>
                <input type="text" className='form-control' value={description} onChange={
                    e => setDescription(e.target.value)
                }/>
                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;