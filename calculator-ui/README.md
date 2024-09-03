# Calculator React App
-----------

# Overview
-----------

This project is a basic calculator application built using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app also includes percentage calculation and a toggle feature to enable or disable expanded display mode. The UI is responsive, adapting well to different screen sizes.

# Run-book
-----------

## Application setup
The steps required to configure and run.

Clone the repo via command line git@github.com/PeterFulton/SimpleCalculator.

Using command line tool:

1.	Navigate to UI directory: `cd calculator-ui`
2.	Install dependencies using `npm install`.
2.	You can run the application using `npm start`.
4.  The application will be available at [http://localhost:3000].

# Run the Tests
Unit tests can be run using `npm test`


# Future Enhancements
-----------
Given more time, several enhancements could be made to improve and extend the solution:

1.  **Advanced Mathematical Operations**
Implement functionality to handle more complex operations such as exponentiation, square roots, and trigonometric functions.
Add support for parentheses to allow for nested operations.
2.  **Full Expression Evaluation**
Provide an option to disable the current automatic evaluation after every operator input. Instead, allow users to input a full expression and evaluate it only when the equals button is clicked. This would mimic the behavior of traditional calculators and offer more control over calculations.
Improve the expression handling logic to ensure that users can input complex expressions with multiple operators and parentheses without encountering errors.
3.  **Calculation Memory**
Implement a feature that displays a history of previous calculations. Users can refer to or reuse past calculations, enhancing the overall utility and user experience.
Allow users to click on these previous calculation in the history to reuse the result in a new calculation. This feature would streamline workflows that involve repeated calculations or building upon previous results.
4.  **Further Exhancement of UI/UX**
Incorporate smooth animations and transitions to enhance the user experience. This could include result display animations, and transitions when switching between different modes (e.g., basic vs. advanced).
Introduce real-time calculation updates as users input or amend values. This would provide instant feedback and reduce the need for clicking the equals button, making the calculator more dynamic and responsive.
Enable users to input operations via keyboard in addition to the on-screen buttons. This would cater to users who prefer keyboard shortcuts and improve accessibility.
Offer themes, including a dark mode, to make the design more customizable. This would allow users to personalize their experience and improve usability in different lighting conditions.
5.  **Deployment Automation**
Automating the deployment process using CI/CD pipelines and containerization would streamline the development process, ensuring that updates are quickly and reliably deployed. Dockerizing the application would make it easier to deploy in various environments.
