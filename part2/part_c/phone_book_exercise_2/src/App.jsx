import { useState } from 'react'
import Person from './components/Person'
import Field from './components/Field'

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleUpdateName = (event) => {
    setNewName(event.target.value)
  }

  const handleUpdateNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleUpdateFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const isNameInList = (aName) => {
    const namesList = persons.map(person => person.name)
    return (
      namesList.includes(aName)
    )
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter)
  )

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (isNameInList(newName)) {
      alert(`${newName} is already in the phonebook :(`)
    } else {
      const aPerson = {name: newName, number: newNumber}
      setPersons(persons.concat(aPerson))
    }
    setNewName('')    
  }

  const PeopleList = () => {
    return (
      <ul>
        {filteredPersons.map(person => 
            <Person key={person.name} person={person} />
          )
        }
      </ul>
    )
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Field text={"filter"}  value={newFilter} onChange={handleUpdateFilter}/>
      <h3>Add a new</h3>
      <form >
        <Field text={"name"} value={newName} onChange={handleUpdateName} />
        <Field text={"number"} value={newNumber} onChange={handleUpdateNumber} />
        <div>
          <button type='submit' onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <PeopleList />
    </div>
  )
}
