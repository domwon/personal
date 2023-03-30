import logo from './images/dom-profile.jpg';
import './App.css'
import { BsTwitter, BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs';

const links = [
  { id: 1, name: 'Twitter', url: 'https://twitter.com/domknguyen' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/dominickhacnguyen' },
  { id: 3, name: 'GitHub', url: 'https://github.com/domwon' },
  { id: 3, name: 'Mail', url: 'mailto:hi@domknguyen.com' },
];

function App() {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="rounded-xl shadow-2xl mask mask-squircle pb-5 max-w-xs" />

        <div className="md:pl-8">
          <h1 className="text-4xl font-bold">Dominic Nguyen</h1>

          <p className="py-6 max-w-xs md:max-w-sm">Hi there! I am a full-stack developer and data scientist
            currently building&nbsp;
            <a className="link link-accent link-hover font-bold" href="https://xplorepod.com" target="_blank"
              rel="noopener noreferrer">XplorePod</a>
            &nbsp;to help people do more of what makes them happy.
          </p>

          <ul className="menu menu-horizontal bg-base-100 p-2 rounded-box">
            {links && links.map(({ id, name, url }) => {
              return <li>
                <a
                  key={id}
                  className="link link-accent"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name === 'Twitter' ? <BsTwitter /> : null}
                  {name === 'LinkedIn' ? <BsLinkedin /> : null}
                  {name === 'GitHub' ? <BsGithub /> : null}
                  {name === 'Mail' ? <BsEnvelopeFill /> : null}
                </a>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className='mt-auto py-2'>
        <p className='text-xs'>Made with 🤍 in Houston.</p>
        </div>
    </div>
  )
}

export default App
