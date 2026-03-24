import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {  
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {    // map() har task par loop chala raha hai mtlb elem = ek single task and idx = index (key ke liye use ho raha hai).............................

                if (elem.active) { 
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {  
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {   
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList
