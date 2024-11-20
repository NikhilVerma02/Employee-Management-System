import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 px-4 py-2 flex justify-between rounded mb-2 text-lg font-semibold'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active</h5>
                <h5 className='w-1/5'>Completed Task</h5>
                <h5 className='w-1/5'>Failed Task</h5>
            </div>
            <div className=''>
                {userData.employees.map((elem, idx) => {
                    return <div key={idx} className=' px-4 py-2 flex justify-between rounded mb-2 bg-[#141313] border-emerald-500 border-2 '>
                        <h2 className='w-1/5 text-lg font-medium'>{elem.first_name}</h2>
                        <h3 className='w-1/5 text-blue-600 font-medium text-lg'>{elem.task_counts.new_task}</h3>
                        <h5 className='w-1/5 text-yellow-400 font-medium text-lg'>{elem.task_counts.active}</h5>
                        <h5 className='w-1/5 text-green-600 font-medium text-lg'>{elem.task_counts.completed}</h5>
                        <h5 className='w-1/5 text-red-600 font-medium text-lg'>{elem.task_counts.failed}</h5>
                    </div>
                })} 
            </div>
        </div>
    )
}

export default AllTasks