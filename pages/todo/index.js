import { useState, useEffect } from 'react'

const Index = () => {
  const initialPlan = {
    id: "",
    plan: ""
  }

  const [plan, setPlan] = useState(initialPlan)
  const [editPlan, setEditPlan] = useState(initialPlan)
  const [allPlan, setAllPlan] = useState([])

  function planHandleChange(event) {
    const { name, value } = event.target
    setPlan({ ...plan, [name]: value })
  }

  function editPlanHandleChange(event) {
    const { name, value } = event.target
    setEditPlan({ ...editPlan, [name]: value })
  }

  function editPlans(plansId, plans) {
    const objPlans = {
      id: plansId,
      plan: plans
    }
    setPlan(objPlans)
  }

  function removePlans(plansId) {
    setAllPlan((prevAllPlan) => {
      return prevAllPlan.filter(prevPlansId => prevPlansId.id !== plansId)
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newPlanId = { ...plan }
    newPlanId.id = Date.now().toString()
    if (plan.id) {
      setAllPlan((prevPlans) => {
        return prevPlans.map((plans) => {
          return plans.id === plan.id ? plan : plans
        })
      })
    } else {
      setAllPlan((prevAllPlan) => {
        return [newPlanId, ...prevAllPlan]
      })
    }
    setPlan(initialPlan)
  }


  useEffect(() => {
    console.log(allPlan);
    localStorage.setItem("Plans", JSON.stringify(allPlan))

  }, [allPlan])

  function filterAll(e) {
    console.log(e.target.value);
  }

  const planElement = allPlan.map((plans) => {
    return (
      <article key={plans.id} className="p-4 flex space-x-4 bg-white shadow rounded-lg hover:shadow-lg">
        <div className="flex items-center">
          <input
            id={plans.id}
            type="checkbox"
            className="h-4 w-4 form-checkbox text-blue-600 border border-blue-300 rounded" />
        </div>
        <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
          <h2 className="text-lg font-semibold text-black mb-0.5">
            <label htmlFor={plans.id}>{plans.plan}</label>
          </h2>
          <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
            <div className="flex-none mt-0.5 font-normal bg-green-100 px-2 rounded-xl">
              <dt className="inline text-green-600">
                <i className="fas fa-clock text-xs"></i>
              </dt>{' '}
              <dd className="inline text-green-600">update 20m</dd>
            </div>
          </dl>
        </div>
        <div className="flex items-center">
          <button onClick={() => editPlans(plans.id, plans.plan)} className="mr-2 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 hover:bg-yellow-200 hover:text-yellow-800 group flex items-center rounded-md bg-yellow-100 text-yellow-600 text-sm font-medium px-3 py-2">
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={() => removePlans(plans.id)} className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-red-200 hover:bg-red-200 hover:text-red-800 group flex items-center rounded-md bg-red-100 text-red-600 text-sm font-medium px-3 py-2">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </article>
    )
  })

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

        <div className="mt-10 sm:mt-0">
          <div className="grid">
            <form onSubmit={onSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h2 className="text-center text-xl font-semibold">What's the plan for today?</h2>
                  <div className="flex">
                    <input
                      type="text"
                      onChange={planHandleChange}
                      value={plan.plan}
                      name="plan"
                      id="first_name"
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
            <button onClick={filterAll} value="All" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-700 group flex items-center rounded-md bg-purple-600 text-white text-sm font-medium px-4 py-2">
              <i className="fas fa-list-ul mr-2"></i>
              All
            </button>
          </a>
          <a>
            <button onClick={filterAll} value="Active" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-200 hover:text-purple-800 group flex items-center rounded-md bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-sort mr-2"></i>
              Active
            </button>
          </a>
          <a>
            <button onClick={filterAll} value="Complete" className="mr-3 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-200 hover:text-purple-800 group flex items-center rounded-md bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-check-circle mr-2"></i>
              Complete
            </button>
          </a>
        </div>

        {planElement}

      </section>
    </div>
  )
}

export default Index