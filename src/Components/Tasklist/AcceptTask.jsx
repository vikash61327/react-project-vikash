import React from 'react'

const AcceptTask = ({data}) => {
  return ( <>
      <div id="scrollbar" className="flex-shrink-0 w-[300px] h-[300px] p-5  bg-yellow-500 rounded-xl flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>

        {/* Scrollable text area */}
        <p className="text-sm mt-2 flex-1 overflow-y-auto break-words whitespace-pre-wrap no-scrollbar">
         {data.description}
        </p>
        <div className='flex justify-between mt-4 '>
          <button className='rounded bg-green-500 py-1 px-2 text-sm'>mark as Completed</button>
          <button className='rounded bg-red-500 py-1 px-2 text-sm'>mark as Failed</button>
        </div>
      </div>
      </>
  )
}

export default AcceptTask
