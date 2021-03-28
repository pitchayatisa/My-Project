import { useState, useEffect } from 'react'

// Components
import CardTodo from '../components/CardTodo'

// Service
import DataService from '../services/service'

const Index = () => {
  const initialTodo = {
    id: null,
    todo: ""
  }

  const [todo, setTodo] = useState(initialTodo)
  const [allTodo, setAllTodo] = useState([])

  function todoHandleChange(event) {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  const getAllTodo = () => {
    DataService.getAll().then(res => {
      setAllTodo(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  const editTodo = (todoId, todos) => {
    const editData = {
      id: todoId,
      todo: todos
    }
    setTodo(editData)
  }

  const saveTodo = () => {
    const data = { todo: todo.todo }
    if (todo.id) {
      DataService.update(todo.id, todo).then((res) => {
        setAllTodo((prevTodos) => {
          return prevTodos.map((todos) => {
            return todos.id === todo.id ? res.data : todos
          })
        })
      })
    } else {
      DataService.create(data).then((res) => {
        setAllTodo((prevTodos) => {
          return [prevTodos, res.data]
        })
      }).catch(err => {
        console.log(err);
      })
    }
    setTodo(initialTodo)
  }

  const removeTodo = (todoId) => {
    DataService.remove(todoId)
    const newTodo = allTodo.filter((todos) => {
      return todos.id !== todoId
    })
    setAllTodo(newTodo)
    location.reload();
  }

  const checked = (id) => {
    // console.log(todo.id === id);
    if (id) {
      setCheckBox(true)
    }
    console.log(checkBox);
  }
  useEffect(() => {
    getAllTodo()
  }, [])

  return (
    <div className="bg-gray-100 sm:min-h-screen">
      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <header className="flex items-center justify-between">
          <h2 className="text-lg leading-6 font-medium text-black">Todo List</h2>
          <a href="/project_list">
            <button className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-arrow-alt-circle-left mr-2"></i>
              Back
            </button>
          </a>
        </header>
        {/* <form className="relative">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input className="focus:border-pink-400 focus:ring-1 focus:ring-pink-400 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
            type="text"
            value={searchProject}
            onChange={(event) => setSearchProject(event.target.value)}
            aria-label="Filter projects"
            placeholder="Filter projects" />
        </form> */}

        <div className="mt-10 sm:mt-0">
          <div className="grid">
            <form onSubmit={saveTodo}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h2 className="text-center text-xl font-semibold">What's the plan for today?</h2>
                  <div className="flex">
                    <input
                      type="text"
                      onChange={todoHandleChange}
                      value={todo.todo}
                      name="todo"
                      id=""
                      autoComplete="off"
                      required
                      className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    <div className="ml-2 mt-1">
                      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-3 flex">
          <a>
            <button value="All" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-700 group flex items-center rounded-md bg-purple-600 text-white text-sm font-medium px-4 py-2">
              <i className="fas fa-list-ul mr-2"></i>
              All
            </button>
          </a>
          <a>
            <button value="Active" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-200 hover:text-purple-800 group flex items-center rounded-md bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-sort mr-2"></i>
              Active
            </button>
          </a>
          <a>
            <button value="Complete" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-200 hover:text-purple-800 group flex items-center rounded-md bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-check-circle mr-2"></i>
              Complete
            </button>
          </a>
        </div>
        {allTodo &&
          allTodo.map((todos, index) => {
            return <CardTodo key={index} id={todos._id} title={todos.todo}
              time={todos.updatedAt}
              onEdit={() => editTodo(todos._id, todos.todo)}
              onRemove={() => removeTodo(todos._id)} />
          })}

      </section>
    </div>
  )
}

export default Index