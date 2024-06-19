import React from 'react'
import Header from './navbar/header'
import '@fortawesome/fontawesome-svg-core/styles.css';
import BodyComponent from './body/body';

const App = () => {
  return (<>
    <div className='App'>
      <Header/>
    </div>
    <div>
      <BodyComponent/>
    </div>
    </>
  )
}

export default App;