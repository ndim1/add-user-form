import { useState } from "react";

function App() {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const changeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    setPerson({...person,[name]:value})
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const newPerson = { id: new Date().getTime().toString(), ...person }
    setPeople([...people, newPerson])
    setPerson({ firstName: '', email: '', age: '' })
  }
  const deleteHandler = id => {
    setPeople(person => {
      const remove = person.filter(person => person.id !== id)
      return remove
    })
  }
 
  return (
    <div className="w-2/4 mx-auto text-center">
      <p className="my-8 text-2xl font-semibold border-b border-[#35EEFE] w-max mx-auto">Add User</p>
      <div className="border border-[#35EEFE] rounded-lg bg-[#ffffff] drop-shadow-2xl">
        <form className="w-2/4 mx-auto" onSubmit={submitHandler}>
          <div className="flex flex-col my-3">
            <label className="text-base font-semibold" htmlFor="firstName">Name:</label>
            <input
              className="px-2 py-0.5 border border-[#35EEFE] text-base placeholder-[#35EEFE] rounded-md"
              type='text' id="firstName"
              name="firstName"
              onChange={changeHandler}
              value={person.firstName}
              placeholder='please enter a name'
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-base font-semibold" htmlFor="email">Email:</label>
            <input
              className="px-2 py-0.5 border border-[#35EEFE] text-base placeholder-[#35EEFE] rounded-md"
              type='email'
              id="email"
              name="email"
              onChange={changeHandler}
              value={person.email}
              placeholder='please enter a email'
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-base font-semibold" htmlFor="age">Age:</label>
            <input
              className="px-2 py-0.5 border border-[#35EEFE] text-base placeholder-[#35EEFE] rounded-md"
              type='text'
              id="age"
              name="age"
              onChange={changeHandler}
              value={person.age}
              placeholder='please enter a age'
            />
          </div>
          <div className="flex justify-end mb-3">
            <button  className="border border-[#35EEFE] px-2.5 rounded text-base font-semibold disabled:bg-[#35EEFE] disabled:cursor-not-allowed" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        {people.map(person => {
          const {id,firstName,email,age} = person
          return <>
            <div className="flex justify-between border border-[#35EEFE] bg-[#ffffff] mt-8 p-2.5 rounded-lg drop-shadow-2xl items-center" key={id}>
              <p className="capitalize text-base">{firstName}</p>
              <p className="lowercase text-sm">{email}</p>
              <p className="text-sm">{age}</p>
              <button className="border border-[#35EEFE] bg-[#35EEFE] text-[#ffffff] text-base font-semibold rounded py-0.5 px-2.5" onClick={()=>{deleteHandler(id)}}>remove</button>
            </div>
          </>
        })}
      </div>
    </div>
  )
    
  
}

export default App;
