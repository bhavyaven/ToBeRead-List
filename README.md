<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">To Be Read List</h1>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a simple database-backed web application I built for my Information Systems course. It is a To Be Read List with CRUD operations and enhanced with dynamic dropdown filters. The focus of the project was mainly on developing the backend and connecting it to a dynamic database; therefore, the UI of the web application is pretty basic. 

### Built With
- Frontend: TypeScript, HTML, CSS, Angular, Node.js, NPM
- Backend: Java, Spring Boot, Hibernate, REST APIs
- Database: MySQL

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow these instructions to get a local copy of the project running on your machine.

### Prerequisites
You need the following installed:
* Node.js & npm
  ```sh
  npm install npm@latest -g
  ```
* Java JDK (for Spring Boot)
* MySQL (or any compatible SQL database)

### Installation
1. Clone the repository
  ```sh
  git clone https://github.com/bhavyaven/ToBeRead-List.git
  ```
2. Navigate to the project directory
  ```sh
  cd ToBeRead-List
  ```
3. Install frontend dependencies
  ```sh
  npm install
  ```
4. Configure database credentials in ```application.properties``` (Spring Boot)
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/toberead
  spring.datasource.username=YOUR_DB_USER
  spring.datasource.password=YOUR_DB_PASSWORD
  ```
5. Run the backend
  ```sh
  ./mvnw spring-boot:run
  ```
6. Run the Angular frontend
  ```sh
  ng serve
  ```
7. Access the app at ```http://localhost:4200```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
* Convenient app to keep track of reading list
* Add new books to your reading list
* Update book details (title, author, genre, reading status)
* Delete books you have finished/no longer want to read
* Filter the list dynamically by status

![alt text](<images/Screenshot 2025-10-22 155549.png>)
![alt text](<images/Screenshot 2025-10-22 155612.png>)
![alt text](<images/Screenshot 2025-10-22 155627.png>)
![alt text](<images/Screenshot 2025-10-22 155637.png>)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- Add user authentication
- Implement book rating system
- Add book recommendation feature
- Enhance frontend UI with better styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/bhavyaven/ToBeRead-List/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bhavyaven/ToBeRead-List" alt="contrib.rocks image" />
</a>


<!-- CONTACT -->
## Contact

Bhavya Venkataraghavan - bhavya.v04@gmail.com   
LinkedIn: http://www.linkedin.com/in/bhavya-venkat    
GitHub: https://github.com/bhavyaven   

Project Link: [https://github.com/bhavyaven/ToBeRead-List](https://github.com/bhavyaven/ToBeRead-List)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

