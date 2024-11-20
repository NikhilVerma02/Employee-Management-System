import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className="h-full w-[300px] rounded-xl bg-green-400 flex-shrink-0 p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-2 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-blue-500 text-sm py-1'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask