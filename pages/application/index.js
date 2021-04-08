import { useState } from 'react'
const Index = () => {
  const initailData = {
    id: null,
    position: "",
    expectedSalary: "",
    jobDate: "",
    dateOfBirth: "",
    religion: "",
    gender: "",
    liveTogether: ""
  }

  const [inputs, setInputs] = useState(initailData)
  const [parent, setParent] = useState('liveTogether')
  const [news, setNews] = useState([])

  function handleChange(event) {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  function handleChecked(event) {
    setNews({ ...news, [event.target.name]: event.target.checked })
  }

  console.log(news);

  const submitForm = (event) => {
    event.preventDefault()
    const newInput = { ...inputs }
    newInput.id = Date.now().toString()
    newInput.liveTogether = parent
    console.log(newInput);
    // setInputs(inputs)
  }
  return (
    <div className="bg-gray-100 sm:min-h-screen">
      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <header className="flex items-center justify-between">
          <h2 className="text-lg leading-6 font-medium text-black">Application Form</h2>
          <a href="/project_list">
            <button className="focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2">
              <i className="fas fa-arrow-alt-circle-left mr-2"></i>
              Back
            </button>
          </a>
        </header>

        <div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submitForm}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Change
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        value={inputs.position}
                        onChange={handleChange}
                        placeholder="Programmer"
                        autoComplete="off"
                        className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700">Expected salary</label>
                      <input
                        type="text"
                        name="expectedSalary"
                        id="expectedSalary"
                        value={inputs.expectedSalary}
                        onChange={handleChange}
                        placeholder="25,000"
                        autoComplete="off"
                        className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="jobDate" className="block text-sm font-medium text-gray-700">Job application date</label>
                      <input
                        type="date"
                        name="jobDate"
                        id="jobDate"
                        value={inputs.jobDate}
                        onChange={handleChange}
                        autoComplete="off"
                        className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of birth</label>
                      <input
                        type="text"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        value={inputs.dateOfBirth}
                        onChange={handleChange}
                        placeholder="11 April 1992"
                        autoComplete="off"
                        className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion</label>
                      <input
                        type="text"
                        name="religion"
                        id="religion"
                        value={inputs.religion}
                        onChange={handleChange}
                        placeholder="Buddhism"
                        autoComplete="off"
                        className="mt-1 py-2 px-3 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                      <div className="mt-1 relative">
                        <select onChange={handleChange} name="gender" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                          <option value="">Select</option>
                          <option value="male" defaultValue="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">Parents</legend>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="liveTogether"
                          type="radio"
                          className="form-radio border border-gray-500"
                          name="liveTogether"
                          checked={parent === 'liveTogether'}
                          onClick={() => setParent('liveTogether')}
                        />
                        <label htmlFor="liveTogether" className="ml-3 block text-sm font-medium text-gray-700">
                          Live together
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="seperated"
                          type="radio"
                          className="form-radio border border-gray-500"
                          name="seperated"
                          value="seperated"
                          checked={parent === 'seperated'}
                          onClick={() => setParent('seperated')}
                        />
                        <label htmlFor="seperated" className="ml-3 block text-sm font-medium text-gray-700">
                          Seperated
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="divorced"
                          type="radio"
                          className="form-radio border border-gray-500"
                          name="divorced"
                          value="divorced"
                          checked={parent === 'divorced'}
                          onClick={() => setParent('divorced')}
                        />
                        <label htmlFor="divorced" className="ml-3 block text-sm font-medium text-gray-700">
                          Divorced
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">Which channel did you know the job vacancy of the company?</legend>
                    </div>
                    <div className="mt-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="jobthai"
                          name="jobthai"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          checked={news['jobthai']}
                          onChange={handleChecked}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="jobthai" className="font-medium text-gray-700">Jobthai</label>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="blognone"
                          name="blognone"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          checked={news['blognone']}
                          onChange={handleChecked}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="blognone" className="font-medium text-gray-700">Blognone</label>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="jobth"
                          name="jobth"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          checked={news['jobth']}
                          onChange={handleChecked}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="jobth" className="font-medium text-gray-700">JobTH</label>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Portfolio ( docx, xlsx, pptx, pdf, jpg, png)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </section>
    </div >
  )
}

export default Index