# Mission Ready Level 5 Mission One Project 💻

This repository features a basic RESTful API built to demonstrate Agile practice of Test-Driven Development (TDD) and Continuous Integration/Continuous Deployment (CI/CD). With each push, the code undergoes various tests and is automatically deployed to Azure.

Initially, a comprehensive set of test cases were designed to cover all the possible scenarios. Five test cases were then implemented as automated unit tests using Jest.

Subsequently, a DevOps pipeline was built for this API, facilitating automatic deployment to the Azure cloud. Using GitHub Actions, the pipeline ensures that upon each new code version push, automated unit tests are executed, and the updated code is promptly deployed to the cloud.

# API Description 🔌

Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:

| INPUT | OUTPUT | ERROR OUTPUT |
| ----- | ------ | ------------ |
| { car_value: 6614; risk_rating: 5} |	{ monthly_premium: 27.5; yearly_premium: 330} | { error: "there is an error"}
 
Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.


