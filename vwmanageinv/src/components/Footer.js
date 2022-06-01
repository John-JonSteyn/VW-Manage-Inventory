import React from 'react';
import styles from './Footer.module.css'

export class Footer extends React.Component {
  render() {
    const staffPage = ['Home', 'Inventory Management'];
    const staffLinks = staffPage.map(page => {
      return (
        <p>
          <a href={'/' + staffPage}>
          {staffPage}
          </a>
        </p>
      )
    });

    return <footer>{staffLinks}</footer>;
  }
}