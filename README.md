<div id="top"></div>
<div align="center">

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
  <a href="https://github.com/Thorin-the-Bearded/VS-Manage-Inventory/">
    <img src="https://img.shields.io/badge/Inventory%20Management-22272E?logo=volkswagen&style=for-the-badge&logoColor=white)" alt="Volkswagen Inventory Management" height="120">
  </a>

  <h2 align="center">Das Auto</h3>
  
  <hr>
  
  <p align="center">
    Stock Management system for Local Volkswagen Branches
    <br />
    <a href="https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/"><strong>View Source Code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/issues">Report Bug</a>
    ·
    <a href="https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use-inventory-management-system">How to use Inventory Management System</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Volkswagen is diven by precision, as is their branches. Built for local branches this inventory management system makes it simple for staff to quickly and easily access a list of all their models - displaying not only the number of cars in stock but also pricing and features associated with each.

Features:
1. Displays each stocked model's:
  * Manufacturer
  * Model
  * Pricing
  * Features
  * Amount of stock
2. Supports:
  * Addition & Reduction of Stock
  * Dynamic Amount of Vehicle Models
  * Landscape & Portrait Screens

Disclaimer: This is not the official system used by Volkswagen Group. This project was developed as an assignment for a junior software-developer position.
Note: This project was made within 94 hours without prior API, React nor Visual Studio experience.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
* [JavaScript](https://www.javascript.com/)
* [.Net 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
* [React](https://reactjs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [DotNet SDK](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)
* [NodeJS](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Visual Studio](https://visualstudio.microsoft.com/)
* [Web Browser](https://ismyinternetworking.com/)

### Installation

1. Clone the repository by entering the following command into your shell:
   ```sh
   git clone Thorin-the-Bearded/VW-Manage-Inventory.git
   ```

### Running Front-End Server:

2. Within your terminal, change to the "\.vwmanageinv\" directory with the following command:
   ```sh
   cd .\VW-Manage-Inventory\vwmanageinv\
   ```
3. Run the following command to run the server:
   ```sh
   npm i
   ```
4. Run the following command to run the server:
   ```sh
   npm start
   ```

### Running API:

5. Open an additional terminal, change to the "\.VWManageInvApi\" directory with the following command:
   ```sh
   cd ..\VWManageInvApi\
   ```
6. Start the API using the following Dot Net:
   ```sh
   dotnet run
   ```

### Sending Information to API:

A database is yet to be connected, until then the project uses In Memory DB.

7. Copy the contents of ".\VWManageInvApi\MockData.json"

8. In another terminal. a list of vehicles can be sent to the API, by pasting the information in a POST:
   ```sh
   post -h Content-Type=application/json -c "[PASTE HERE]"
   ```
   (A platform such as [Postman](https://www.postman.com/downloads/) can also be utilised for these purposes)

### Loading the site:

9. In your browser, navigate to [The Inventory Management Webpage](http://localhost:3000/) at [http://localhost:3000/](http://localhost:3000/).

### Publishing the Database:

10. The database can be found by opening [Visual Studio](https://visualstudio.microsoft.com/) and navigating to '.\VW-Manage-Inventory\BranchInv\'

11. The database can be published by double clicking "BranchInv.publish.xml"

From here you can query the database with use of the CRUD procedures:
- spCreateVehicle @Id int @Make text @Model text @Features text @Price text @NumStock int
- spReadVehicle   (Reads all vehicles)
- spUpdateVehicle @Id int @Make text @Model text @Features text @Price text @NumStock int
- spDeleteVehicle @Id int



<!-- USAGE EXAMPLES -->
## How to use Inventory Management System

Admitedly difficult to set up, the inventory management system is easy to operate.

Upon loading the webpage, the user is immediately faced with the necessary information neatly laid out before them. From here the (-) button can be pressed for each car sold and the (+) can be pressed for each new car added to the stock.

[![Landscape 1][landscape-1]](https://raw.githubusercontent.com/Thorin-the-Bearded/VW-Manage-Inventory/main/images/landscapeView01.png)
[![Landscape 2][landscape-2]](https://raw.githubusercontent.com/Thorin-the-Bearded/VW-Manage-Inventory/main/images/landscapeView02.png)

Portrait view is also supported, so that staff could easily operate the site from their phone - enabling them to work from wherever, whenever.

[![Portrait][portrait]](https://raw.githubusercontent.com/Thorin-the-Bearded/VW-Manage-Inventory/main/images/images/portraitView01.png)

The Webapp doesn't boast of it's design by it's own accord, but is made to uniformly fit in with [Volkswagen Web Design](https://www.vw.com/en.html). The intended vehicles for this database can be found here:

[![Models][models]](https://www.vw.co.za/en/models.html)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Create Database
- [x] Create Stored Procedures for CRUD
- [x] Fix Broken Style Sheets
- [x] Fix Broken Table Layout
- [x] Connect API
- [X] Support addition and deduction of stock
- [ ] Connect Database Connection
- [ ] Fix Accordion
- [ ] Fix Navbar
- [ ] Update Database Content

See the [open issues](https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
I found this project to be challenging, albeit rewarding. I would not have made it far if it had not been for:

* [Astrid](https://twitter.com/Astrid_Braided)'s loving support and encouragement.
* [Dewald](https://github.com/dewald-L)'s technical expertise nudging me in the right direction.


## Resources
If you would like to create a similar project, here's a list of the main resources I used for this project:

* [CodeCademy | Create a Front-End App with React](https://www.codecademy.com/learn/paths/build-web-apps-with-react)
* [Microsoft Docs | Tutorial: Create a web API with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code)
* [IAmTimCorey | SQL Data Tools In C# - Database Creation, Management, and Deployment in Visual Studio](https://www.youtube.com/watch?v=ijDcHGxyqE4)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Thorin-the-Bearded/VW-Manage-Inventory.svg?style=for-the-badge&color=151F5D
[contributors-url]: https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Thorin-the-Bearded/VW-Manage-Inventory.svg?style=for-the-badge&color=FFFFFF
[forks-url]: https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/network/members
[stars-shield]: https://img.shields.io/github/stars/Thorin-the-Bearded/VW-Manage-Inventory.svg?style=for-the-badge&color=151F5D
[stars-url]: https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/stargazers
[issues-shield]: https://img.shields.io/github/issues/Thorin-the-Bearded/VW-Manage-Inventory.svg?style=for-the-badge&color=FFFFFF
[issues-url]: https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/issues
[license-shield]: https://img.shields.io/github/license/Thorin-the-Bearded/VW-Manage-Inventory.svg?style=for-the-badge&color=151F5D
[license-url]: https://github.com/Thorin-the-Bearded/VW-Manage-Inventory/blob/master/LICENSE.txt

<!-- SCREENSHOTS -->
[landscape-1]: images/landscapeView01.png
[landscape-2]: images/landscapeView02.png
[portrait]: images/portraitView01.png

[models]: images/models.png
