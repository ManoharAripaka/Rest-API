import React from 'react';
import { useDispatch } from 'react-redux';
import { updateedit, updateshow, updateuserId } from '../../Store/dataStore';
import "./add.css"
import { Link } from 'react-router-dom';
function Add() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(updateshow("block"))
        dispatch(updateuserId(Math.floor(100000 + Math.random() * 900000)))
        dispatch(updateedit(false))
    }
    return (
        <>
            <div className='one'>
                <Link to="/addUser"><button id="one" onClick={handleClick}>Add New User</button></Link>
            </div>
        </>
    );
}
export default Add;