import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-20 justify-between gap-5 screen">
      <div className="px-9 py-6 w-[45%] bg-yellow-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_counts.new_task}</h2>
        <h3 className="text-xl font-medium">Accepted Task(active)</h3>
      </div>

      <div className="px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_counts.active}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="px-9 py-6 w-[45%] bg-green-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_counts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="px-9 py-6 w-[45%] bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_counts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers