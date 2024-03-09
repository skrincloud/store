import { useEffect, useState } from 'react'
import { getStoreCustomers } from '../../api/customers'
import Details from '../../components/Details'
import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Scanner from '../../components/Scanner'

import './Home.css'

function Home() {
  const [customers, setCustomers] = useState([])
  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    getStoreCustomers().then(setCustomers)
  }, [])

  return (
    <div className="Home">
      <Header />
      <pre>{JSON.stringify(customer, null, 2)}</pre>
      <Dropdown
        data={customers}
        icon="person"
        label="Cliente"
        onSelect={setCustomer}
        action={{ icon: 'add' }}
      />
      <Scanner />
      <ProductList />
      <Details />
    </div>
  )
}

export default Home
