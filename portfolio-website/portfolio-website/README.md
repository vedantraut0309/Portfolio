# Portfolio Website

This is a portfolio website project developed using Java Spring Boot. It showcases various projects and skills of a Full Stack Web Developer.

## Project Structure

```
portfolio-website
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── portfolio
│   │   │               ├── Application.java
│   │   │               └── controller
│   │   │                   └── HomeController.java
│   │   ├── resources
│   │   │   ├── static
│   │   │   │   ├── css
│   │   │   │   │   └── styles.css
│   │   │   │   ├── js
│   │   │   │   │   └── scripts.js
│   │   │   │   └── images
│   │   │   └── templates
│   │   │       └── index.html
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── portfolio
│                       └── ApplicationTests.java
├── pom.xml
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```
   cd portfolio-website
   ```

3. **Build the project using Maven:**
   ```
   mvn clean install
   ```

4. **Run the application:**
   ```
   mvn spring-boot:run
   ```

5. **Access the portfolio website:**
   Open your web browser and go to `http://localhost:8080`.

## Features

- Home page displaying portfolio projects.
- Responsive design with CSS styling.
- Client-side interactivity using JavaScript.

## Technologies Used

- Java
- Spring Boot
- Maven
- HTML/CSS/JavaScript

## License

This project is licensed under the MIT License.