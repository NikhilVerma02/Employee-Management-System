import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full mt-10  py-5 flex items-center justify-start flex-nowrap gap-5 overflow-x-auto"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={data.id} data={elem}/>
        }
        if (elem.completed) {
          return <CompleteTask key={data.id} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={data.id} data={elem} />
        }
        if (elem.new_task) {
          return <NewTask key={data.id} data={elem} />
        }
      })}

    </div>
  );
}

export default Tasklist