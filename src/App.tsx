import { useState } from 'react'
// import logo from './logo.svg'
import logo from './images/dom-profile.jpg'
import './App.css'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';


const links = [
  { id: 1, name: 'Twitter', url: 'https://twitter.com/domknguyen' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/dominickhacnguyen/' },
  { id: 3, name: 'GitHub', url: 'https://github.com/domwon' },
];

function App() {

  return (
    <div className="App font-face-rc">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dominic Nguyen</h1>
        <p>
          Hi! I'm learning Web3 and building <a className="link" href="https://xplorepod.com" target="_blank"
            rel="noopener noreferrer">XplorePod</a> to help people explore and do more of what makes them happy.
        </p>
        <p>
          {links && links.map(({ id, name, url }) => {
            return <a
              key={id}
              className="App-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name === 'Twitter' ? <BsTwitter /> : null}
              {name === 'LinkedIn' ? <BsLinkedin /> : null}
              {name === 'GitHub' ? <BsGithub /> : null}
            </a>
          })}
        </p>
      </header>
    </div>
  )
}

export default App
