import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
       <div className="flex-shrink-0 w-[300px] h-[300px] p-5 bg-blue-400 rounded-xl flex flex-col">
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
        <div className='mt-4'>
            <button className='bg-blue-900 rounded px-2 py-1'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
