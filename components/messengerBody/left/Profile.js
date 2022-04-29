import React, {useState } from 'react'
import { FaEdit } from "react-icons/fa";






function Profile() {
    return (
      <>
        <div className="px-3 py-5 bg-light-blue flex items-center justify-between">
          <p className='text-blue-900 text-3xl font-bold'>Messages</p>
        <FaEdit className='cursor-pointer text-2xl text-blue-900' />
        </div>
      </>
    );
}

export default Profile
