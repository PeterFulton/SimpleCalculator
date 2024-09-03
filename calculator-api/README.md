# Basic Calculator API
-----------

# Overview
-----------

This project is a simple RESTful API for a basic calculator, built using Java and Spring Boot. It supports fundamental arithmetic operations: addition, subtraction, multiplication, and division. The API validates inputs and handles errors appropriately, providing meaningful feedback for incorrect usage.

# Run-book
-----------

**Prerequsites**:
- Java 21 or later
- Maven 3.6.3 or later

## Application setup
The steps required to configure and run.

Clone the repo via command line git@github.com/PeterFulton/SimpleCalculator.

Using command line tool:

1.	Navigate to API directory: `cd calculator-api`
2.	Use Maven to build the project: `mvn clean install`
3.	You can run the application using Maven: `mvn spring-boot:run` in calculator.api root.
4.	Alternatively, you can build the JAR and run it: `mvn package && java -jar target/basic-calculator-api-0.0.1-SNAPSHOT.jar`
5.  Application will start on [http://localhost:8080]. As well as interaction by the frontend you can use tools like Postman, curl, or go straight through a web browser to interact with the API. 

# Example Requests:
* [Addition:] GET http://localhost:8080/add?a=5&b=3
* [Subtraction:] GET http://localhost:8080/subtract?a=5&b=3
* [Multiplication:] GET http://localhost:8080/multiply?a=5&b=3
* [Division:] GET http://localhost:8080/divide?a=10&b=2

# Run the Tests
Unit tests can be run using Maven: `mvn test`


# Future Enhancements
-----------
Given more time, several enhancements could be made to improve and extend the solution:

1.  **Advanced Mathematical Operations**
A natural and valuable extension of the basic calculator functionality. Adding operations like exponentiation, square roots, factorials, and logarithms would attract users needing more than basic arithmetic, expanding potential the user base.
2.  **Full Expression Evaluation**
Implementing full expression evaluation would be a significant enhancement, enabling users to input complex expressions in a single request. This would improve both the user experience — removing the need for manual BODMAS considerations in calculation entry — and the efficiency of the API, as it would reduce the need for multiple API calls for a single calculation.
3.  **Calculation Memory**
Adding a feature to store recent calculations would greatly improve the user experience. Users could reuse previous results, reducing the need to re-enter data and making the application more interactive and user-friendly.
4.  **Security**
Implementing authentication and rate limiting would protect the API from unauthorized access and abuse, ensuring that the service remains reliable and secure.
5.  **Error Logging and Monitoring**
Centralized logging and monitoring would be crucial for maintaining the application in production. Tools like ELK Stack and Prometheus/Grafana would provide insights into the application's performance and help quickly identify and resolve issues.
6.  **Deployment Automation**
Automating the deployment process using CI/CD pipelines and containerization would streamline the development process, ensuring that updates are quickly and reliably deployed. Dockerizing the application would make it easier to deploy in various environments.

