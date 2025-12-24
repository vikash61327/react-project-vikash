import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 w-[300px] h-[300px] p-5 bg-green-400 rounded-xl flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">
          {data.title}
        </h2>

        {/* Scrollable text area */}
        <p className="text-sm mt-2 overflow-y-auto break-words whitespace-pre-wrap flex-1">
          {data.description}
        </p>
        <div className='mt-3'>
             <button className='bg-green-800 rounded py- px-2'>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
