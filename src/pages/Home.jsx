import React from 'react'
import Form from '../hooks/Form'
import State from '../hooks/State'
import User from '../User'

const Home = () => {
  return (
    <div>
      <Form />
      <State />
      <User name="xyz" ages="33"/>
    </div>
  )
}

export default Home