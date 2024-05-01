import { useEffect, useState } from 'react'
import { getCustomers } from '../../api/customer/getCustomers'
import { storage } from '../../api/storage'
import Field from '../../components/Field'
import { useGlobalStore } from '../../store'
import './Dropdown.css'

function Dropdown() {
  const { customers } = useGlobalStore()
  const [searchInput, setSearchInput] = useState('')
  const [filteredCustomers, setFilteredCustomers] = useState(customers)

  async function setCustomersToStorage() {
    const data = await getCustomers()
    storage.set('customers', data)
  }

  function handleSearchChange(event) {
    const text = event.toLowerCase()
    setSearchInput(text)

    const filtered = customers.filter((customer) =>
      customer.name.toLowerCase().includes(text),
    )
    setFilteredCustomers(filtered)
  }

  function renderCustomers(customers) {
    if (customers.length > 0) {
      return customers.map((customer) => (
        <div key={customer.id} className="Dropdown__customer">
          <p>{customer.name}</p>
          <p>{customer.pedidos} pedidos</p>
        </div>
      ))
    }

    return <p>No hay resultados</p>
  }

  useEffect(() => {
    setCustomersToStorage()
  }, [])

  return (
    <>
      <section className="Dropdown">
        <div className="Field__container">
          <Field
            name="text"
            type="text"
            icon="person"
            label="Cliente"
            defaultValue={searchInput}
            onChange={handleSearchChange}
          ></Field>
        </div>
        {searchInput && (
          <div className="Dropdown__container">
            {renderCustomers(filteredCustomers)}
          </div>
        )}
      </section>
    </>
  )
}

export default Dropdown
