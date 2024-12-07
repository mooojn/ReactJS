import React from 'react';
import Student from './Student';


const App = () => {
  return (
    <>
      <Student name="Moon" age={21} isStudent = {true}/>
      <Student name="Meeral" age={16} isStudent = {true}/>
      <Student name="Kaka" age={5} isStudent = {false}/>
      <Student />
    </>
  )
}

export default App