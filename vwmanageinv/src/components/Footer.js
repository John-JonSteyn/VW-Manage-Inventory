import React from 'react';
import './Footer.css'

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="container">
          <div>
            <h4>
              <a href='https://www.vw.co.za/en.html'> VW Home Page</a> | 
              <a href='#'> Manage Inventory</a> |
              <a href='https://github.com/Thorin-the-Bearded/VW-Manage-Inventory'> Guide</a>
            </h4>
          </div>
          <div id='footGrid'>
            <div className="footCol">
              <ul>
                <li><a href="https://www.vw.co.za/app/forms/vw-za/quote/en/">Request a Quote</a></li>
                <li><a href="https://www.vw.co.za/app/forms/vw-za/booktestdrive/en/+/+/+/+/+/+/+/+/+/+/+/+/+/+/+">Book a Test Drive</a></li>
                <li><a href="https://forms.vw.co.za/i/book-a-service">Book a Service</a></li>
                <li><a href="https://www.mastercars.co.za/en.html">Master Cars</a></li>
                <li><a href="https://specialoffers.vw.co.za/i/offers">Special Offers</a></li>
              </ul>
            </div>
            <div className="footCol">
              <ul>
                <li><a href="https://www.vw.co.za/en/owners.html">Owners</a></li>
                <li><a href="https://www.vw.co.za/en/dealer-search-south-africa.html">Find a Dealer</a></li>
                <li><a href="https://www.vw.co.za/en/offers-and-finance/financial-services.html">Volkswagen Financial Services</a></li>
                <li><a href="https://www.vw.co.za/en/help-and-support.html">Contact Us</a></li>
              </ul>
            </div>
            <div className="footCol">
              <ul>
                <li><a href="https://www.vw.co.za/en/volkswagen-experience/corporate-information.html">Volkswagen Group</a></li>
                <li><a href="https://www.vw.co.za/en/volkswagen-experience/corporate-information/careers.html">Careers</a></li>
                <li><a href="https://www.vw.co.za/en/volkswagen-experience/driving-academy.html">Volkswagen Advanced Driving</a></li>
                <li><a href="https://www.vw.co.za/en/volkswagen-experience/magazine-old1.html">Volkswagen Magazine</a></li>
                <li><a href="https://www.vw.co.za/en/offers-and-finance/fleet.html">Volkswagen Fleet</a></li>
              </ul>
            </div>
            <div className="footCol">
              <ul>
                <li><a href="https://www.facebook.com/VWSA/">Facebook</a></li>
                <li><a href="https://www.youtube.com/user/volkswagensa">YouTube</a></li>
                <li><a href="https://twitter.com/VolkswagenSA">Twitter</a></li>
                <li><a href="https://www.instagram.com/volkswagensouthafrica/">Instagram</a></li>
              </ul>
            </div>  
          </div>
        </div>
        <h5>Disclaimer</h5>
        <p>This website is not developed nor endorsed by Volkswagen Group, visit <a href='https://github.com/Thorin-the-Bearded/VW-Manage-Inventory'>the listed repository</a> for more inforation.</p>
      </footer>
    )
  }
}