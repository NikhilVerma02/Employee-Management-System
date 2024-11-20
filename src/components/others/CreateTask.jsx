import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [desciption, setDesciption] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, category, date, assignTo, desciption, active: false, newTask: true, failed: false, completed: false })

        const data = userData.employees
        console.log(data);
        

        data.forEach((elem) => {
            if(assignTo == elem.first_name){
                elem.tasks.push(newTask)
                elem.task_counts.new_task = elem.task_counts.new_task + 1
            }
        })

        // localStorage.setItem('employees', JSON.stringify(data))

        setAssignTo('')
        setCategory('')
        setDate('')
        setDesciption('')
        setTaskTitle('')
    }

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form className="flex items-start justify-between w-full  flex-wrap" onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text" placeholder="Make a UI design" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            type="date" name="" id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            type="text" placeholder="Employee Name" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text" placeholder="Design, Dev, etc" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={desciption}
                        onChange={(e) => {
                            setDesciption(e.target.value)
                        }}
                        name="" id="" className="w-full h-40 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" ></textarea>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4  w-full h-10">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask