import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateApiData, updaterun, updateedit, updatefirstName, updatelastName } from '../../Store/dataStore';
import axios from 'axios';
import "./table.css"
import { MdModeEdit, MdDelete, MdCheck, MdClose } from "react-icons/md"
import { Link } from 'react-router-dom';
function Table() {
    const { ApiData, run, edit, firstName, lastName } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://6299a2ed6f8c03a978461ce0.mockapi.io/users`)
            .then(response => {
                dispatch(updateApiData(response.data))
                dispatch(updaterun("run"))
            })
    }, [run])
    const hanldeChange = (e) => {
        if (e.target.name === "inFirstName") dispatch(updatefirstName(e.target.value))
        else if (e.target.name === "inLastName") dispatch(updatelastName(e.target.value))
    }
    const handleCancel = (e) => {
        dispatch(updateedit(false))
        dispatch(updatefirstName(""))
        dispatch(updatelastName(""))
    }
    const handleUpdate = (e) => {
        localStorage.setItem("ID", e.id)
        dispatch(updatefirstName(e.firstName))
        dispatch(updatelastName(e.lastName))
        dispatch(updateedit(true))
    }
    const handleSave = (e) => {
        axios.put(`https://6299a2ed6f8c03a978461ce0.mockapi.io/users/${e}`, { firstName, lastName })
            .then(response => {
                dispatch(updaterun(""))
                dispatch(updateedit(false))
                dispatch(updatefirstName(""))
                dispatch(updatelastName(""))
                console.log(response);
            })
    }
    const handleDelete = (e) => {
        axios.delete(`https://6299a2ed6f8c03a978461ce0.mockapi.io/users/${e}`)
            .then(response => {
                dispatch(updaterun(""))
                console.log(response);
            })
    }
    return (
        <div className='table'>
            <center>
                <table>
                    <thead>
                        <tr id="head">
                            <th id="c1">Id</th>
                            <th id="c2">UserId</th>
                            <th id="c3">First Name</th>
                            <th id="c4">Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ApiData.map((data) => {
                            if (edit && localStorage.getItem("ID") === data.id) {
                                return (
                                    <tr key={data.id}>
                                        <td id="c1">{data.id}</td>
                                        <td id="c2">{data.userId}</td>
                                        <td id="c3"><input type="text" name="inFirstName" id="inFirstName" value={firstName} onChange={hanldeChange}></input></td>
                                        <td id="c4"><input type="text" name="inLastName" id="inLastName" value={lastName} onChange={hanldeChange}></input></td>
                                        <td><Link to = "/"><button id="update" onClick={() => handleSave(data.id)}> <MdCheck /> </button></Link><Link to="/"><button id="delete" onClick={handleCancel}><MdClose /></button></Link></td>
                                    </tr>
                                )
                            }
                            else {
                                return (
                                    <tr key={data.id}>
                                        <td id="c1">{data.id}</td>
                                        <td id="c2">{data.userId}</td>
                                        <td id="c3"><div id="dataFirstName">{data.firstName}</div></td>
                                        <td id="c4"><div id="dataLastName">{data.lastName}</div></td>
                                        <td><Link to="/update"><button id="update" onClick={() => handleUpdate(data)}><MdModeEdit /></button></Link><button id="delete" onClick={() => handleDelete(data.id)}><MdDelete /></button></td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </center>
        </div >
    );
}
export default Table;