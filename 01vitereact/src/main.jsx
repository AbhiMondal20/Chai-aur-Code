import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function  MyApp(){
  return(
    <>
      <h1>Hello World</h1>
    </>
  )
}


const anotherApp = (
  <a href="https://google.com">google.com</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
<App/>
  )
