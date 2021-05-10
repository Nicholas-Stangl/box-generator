import React, { useState } from 'react';
import styles from './NinjaForm.module.css'


const NinjaForm = () => {
    const [formInfo, setFormInfo] = useState({
        ninjaFavColor: ""
    })

    const [allNinjas, setAllNinjas] = useState ([])

    const changeHandler =(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        setAllNinjas([...allNinjas, formInfo])
        setFormInfo({
            ninjaFavColor: ""
        })
    }


    return (
        <>
        <div>
            <br/>
            <br/>
            <br/>
            <form onSubmit={submitHandler} className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Color</label>
                    <input className="form-control" type="text" name="ninjaFavColor" id="" onChange= {changeHandler} value={formInfo.ninjaFavColor} />
                </div>
                <div>
                    <button type="submit" className="btn btn-success">Add a Color</button>
                </div>
            </form>
            <br/>
        </div>

        <div className = {styles.container}>
            {allNinjas.map(ninja =>{
                return <div className = {styles.indNinja} style = {{backgroundColor: ninja.ninjaFavColor}}>
                </div>
            })}
        </div>
        </>
    );
};

export default NinjaForm;