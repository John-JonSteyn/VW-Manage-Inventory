import React from 'react';
import styles from './Navbar.module.css'

const page = [
  {
    title :'Home',
    url   :'#',
    cName :'nav-links'
  },
  {
    title :'Manage Stock',
    url   :'#',
    cName :'nav-links'
  }
];

export class Navbar extends React.Component {
  render() {
    return (
      <nav class='NavBarItems'>
        <svg aria-hidden='true' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
            <path d='M0 4h24v2H0zM0 11h14v2H0zM0 18h20v2H0z'></path>
        </svg>
        <h3 className='navbar-logo'>
           Staff Home
        </h3>
        <ul>
          {page.map((item, index) => {
            return (
              /* Key used for <li> order */
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
          
        </ul>
        <a href='#'>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>
              Volkswagen
            </title>
            <path d="M12 0C5.36 0 0 5.36 0 12S5.36 24 12 24 24 18.64 24 12 18.64 0 12 0M12 1.41C13.2 1.41 14.36 1.63 15.43 2L12.13 9.13C12.09 9.17 12.09 9.26 12 9.26S11.91 9.17 11.87 9.13L8.57 2C9.64 1.63 10.8 1.42 12 1.42M6.9 2.74L10.72 10.97C10.8 11.14 10.89 11.19 11 11.19H13C13.12 11.19 13.2 11.14 13.29 10.97L17.06 2.74C18.64 3.64 20 4.93 20.96 6.47L15.6 16.84C15.56 16.93 15.5 16.97 15.47 16.97C15.39 16.97 15.39 16.89 15.34 16.84L13.29 12.3C13.2 12.13 13.12 12.09 13 12.09H11C10.89 12.09 10.8 12.13 10.71 12.3L8.66 16.84C8.61 16.89 8.62 16.97 8.53 16.97C8.44 16.97 8.44 16.89 8.4 16.84L3 6.47C3.94 4.93 5.32 3.64 6.9 2.74M2.06 8.53L8.23 20.53C8.31 20.7 8.4 20.83 8.62 20.83C8.83 20.83 8.91 20.7 9 20.53L11.87 14.14C11.91 14.06 11.96 14 12 14C12.09 14 12.09 14.1 12.13 14.14L15.04 20.53C15.13 20.7 15.21 20.83 15.43 20.83C15.64 20.83 15.73 20.7 15.81 20.53L22 8.53C22.37 9.6 22.59 10.76 22.59 12C22.54 17.79 17.79 22.59 12 22.59C6.21 22.59 1.46 17.79 1.46 12C1.46 10.8 1.67 9.65 2.06 8.53Z"/>
          </svg>
          </a>
        <br/>
      </nav>
    )
  }
}