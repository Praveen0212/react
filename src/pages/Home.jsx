import React, { createContext } from 'react'
import Form from '../hooks/Form'
import State from '../hooks/State'
import User from '../User'

export const userContext=createContext()

const Home = () => {
  return (
    <div>
      <userContext.Provider value="asdfg">
        <Form />
        <State />
        <User name="xyz" ages="33"/>
      </userContext.Provider>
    </div>
  )
}

export default Home