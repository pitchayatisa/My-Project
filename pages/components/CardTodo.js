import { useState } from 'react'
import { format } from 'date-fns'

const CardTodo = ({ title, id, time, onEdit, onRemove, onChecked }) => {
  return (

    <article className="p-4 flex space-x-4 bg-white shadow rounded-lg hover:shadow-lg">
      <div className="flex items-center">
        <input
          id={id}
          onChange={onChecked}
          type="checkbox"
          className="h-4 w-4 form-checkbox text-blue-600 border border-blue-300 rounded" />
      </div>
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          <label htmlFor={id}>{title}</label>
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div className="flex-none mt-0.5 font-normal bg-green-100 px-2 rounded-xl">
            <dt className="inline text-green-600">
              <i className="fas fa-clock text-xs"></i>
            </dt>{' '}
            <dd className="inline text-green-600">{` update ${format(new Date(time), "dd MMMM yyyy HH:mm a")}`}</dd>
          </div>
        </dl>
      </div>
      <div className="flex items-center">
        <button onClick={onEdit} className="mr-2 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 hover:bg-yellow-200 hover:text-yellow-800 group flex items-center rounded-md bg-yellow-100 text-yellow-600 text-sm font-medium px-3 py-2">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={onRemove} className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-red-200 hover:bg-red-200 hover:text-red-800 group flex items-center rounded-md bg-red-100 text-red-600 text-sm font-medium px-3 py-2">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>

  )
}

export default CardTodo