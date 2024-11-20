import React, { useState } from 'react'

const Header = (props) => {

    // const [userName, setUserName] = useState('')

    // if(!data){
    //     setUserName("Admin")
    // }else{
    //     setUserName(data.first_name)
    // }

    const logOutUser = () =>{
        localStorage.setItem('loggedInUser', '')
        // window.location.reload()
        props.changeUser('')
    }

    return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>UserName👋</span> </h1>
        <button className='bg-red-600 rounded-sm text-white px-5 py-3 text-lg font-medium' onClick={logOutUser}>Logout</button>
    </div>
    )
}

export default Header