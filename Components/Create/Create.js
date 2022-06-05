import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateuserId, updatefirstName, updatelastName, updateshow, updaterun } from '../../Store/dataStore';
import axios from 'axios';
import "./create.css"
import { Link } from 'react-router-dom';
function Create() {
    const { userId, firstName, lastName, show } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const hanldeChange = (e) => {
        if (e.target.name === "updatefirstName") dispatch(updatefirstName(e.target.value))
        else if (e.target.name === "updatelastName") dispatch(updatelastName(e.target.value))
    }
    const handleClickClear = () => {
        dispatch(updatefirstName(""))
        dispatch(updatelastName(""))
    }
    const handleClickAdd = (e) => {
        if (firstName !== "" && lastName !== "") {
            axios.post("https://6299a2ed6f8c03a978461ce0.mockapi.io/users", { userId, firstName, lastName })
                .then(response => {
                    console.log(response)
                    dispatch(updateuserId(""))
                    dispatch(updatefirstName(""))
                    dispatch(updatelastName(""))
                    dispatch(updateshow("none"))
                    dispatch(updaterun(""))
                })
        }
    }
    const handleClose = () => {
        dispatch(updateuserId(""))
        dispatch(updatefirstName(""))
        dispatch(updatelastName(""))
        dispatch(updateshow("none"))
        dispatch(updaterun(""))
    }
    return (
        <div className='blur' style={{ display: show }}>
            <div className="cent">
                <div className='addBlock'>
                    <h3>Add New User</h3>
                    <Link to="/"><p id="close" onClick={handleClose}>close</p></Link>
                    <input type="text" name="updatefirstName" value={firstName} onChange={hanldeChange} placeholder="First Name"></input>
                    <input id="last" type="text" name="updatelastName" value={lastName} onChange={hanldeChange} placeholder="Last Name"></input>
                    <Link to="/"><button id="button1" onClick={handleClickAdd}>Add</button></Link>
                    <button id="button2" onClick={handleClickClear}>Clear</button>
                </div>
            </div >
        </div>
    );
}
export default Create;