import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='card shadow p-5 me-5 mt-3'>
                <div className='d-flex justify-content-between'>
                    <h2>Profile</h2>
                    <button className='btn btn-outline-info' onClick={() => setOpen(!open)}>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <Collapse in={open}>
                    
                <div>
                    <label htmlFor="profile" className='text-center mb-2 mt-3'>
                        <input type="file" id='profile' style={{ display: "none" }} />
                        <img src="https://clipground.com/images/profile-png-5.png"
                            alt="" width={"200px"} height={"200px"} />
                    </label>
                    <div>
                        <div className='mt-3'>
                            <input type="text" placeholder='Github Link' className='form-control' />
                        </div>
                        <div className='mt-3 mb-3'>
                            <input type="text" placeholder='LinkedIn Link' className='form-control' />
                        </div>
                        <button className='btn btn-success rounded w-100'>Update</button>
                    </div>
                </div>
                </Collapse>
            </div>
        </>
    )
}

export default Profile