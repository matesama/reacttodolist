import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="filter">
			<form>
				<input type="text" name="items"  id="txt"/>
				<button type="submit">ADD</button>
			</form>	
        </div>

		<ul id="listItems">

    </ul>

    </>
  )
}

export default App
