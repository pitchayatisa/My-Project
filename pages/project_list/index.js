import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import DataService from '../services/service'

const Index = () => {
  const [project, setProject] = useState([])
  const [searchProject, setSearchProject] = useState('')

  const allProjectData = [
    {
      "id": 1,
      "title": "Todo List",
      "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "imagePath": "/images/cover/todo_list.jpg",
      "link": "/todo"
    },
    {
      "id": 2,
      "title": "Application Form",
      "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "imagePath": "/images/cover/form.jpg",
      "link": "/application"
    },
    {
      "id": 3,
      "title": "Calculator",
      "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "imagePath": "/images/cover/calculator.jpg",
      "link": "/calculator"
    },
  ]

  // const filterProject = project.filter((projects) => {
  //   return projects.name && projects.name.includes(searchProject)
  // })


  return (
    <div className="bg-gray-100 sm:min-h-screen">
      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <header className="flex items-center justify-between">
          <h2 className="text-lg leading-6 font-medium text-black">All Projects</h2>
          <a href="/">
            <button className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-home mr-2"></i>
              Home
            </button>
          </a>
        </header>
        <form className="relative">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input className="focus:border-pink-400 focus:ring-1 focus:ring-pink-400 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
            type="text"
            // value={searchProject}
            // onChange={(event) => setSearchProject(event.target.value)}
            aria-label="Filter projects"
            placeholder="Filter projects" />
        </form>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allProjectData.map((project, index) => (
            <li x-for="item in items h-80" key={index}>
              <a href={project.link} className="cursor-pointer bg-white hover:shadow-lg group block rounded-lg p-4 shadow">
                <div>
                  <img src={project.imagePath} className="object-contain h-40 w-full" />
                  <dd className="leading-6 mt-4 font-medium text-black">
                    {project.title}
                  </dd>
                </div>
                <div>
                  <dd className="text-sm text-gray-500 font-medium mb-4">
                    {project.description}
                  </dd>
                </div>
                <div className="col-start-2 row-start-1 row-end-3">
                  <div className="w-full flex justify-end items-center">
                    <button className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 hover:bg-pink-200 hover:text-pink-800 group flex items-center rounded-md bg-pink-100 text-pink-600 text-sm font-medium px-4 py-2">
                      view &rarr;
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
          {/* <li className="hover:shadow-lg flex rounded-lg">
            <a href="/new" className="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm font-medium py-4">
              New Project
            </a>
          </li> */}
        </ul>
      </section>

    </div>
  )
}



export default Index