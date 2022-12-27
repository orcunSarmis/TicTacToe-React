import React from 'react'
import './Tictac.css'

const Tictac = () => {

  const handleClick = () => {
  
  }
  
  const Cell = () => {
    return <td>-</td>
  }

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tictac;