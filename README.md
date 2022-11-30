# search-engine-MERN

A book search application built using an Apollo Server, GraphQL API - queries and mutations to fetch and modify data, and an authentication middleware.

It has been refactored as it was previously built with Google Books API and a RESTful API, a React front end, MongoDB database, and Node.js/Express.js server.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

# Installation:

To install dependancies:
```
npm i
```
To run application:
```
npm start
```

# Screenshots of Deployed Application:

Desktop / Larger Screens - Homepage:

![Desktop View - Homepage](./images/home.png)

Mobile View - Homepage:

<img src="./images/m-home.png" alt="Mobile View - Homepage" width="300">

Desktop / Larger Screens - Portfolio Page:

![Desktop View - Portfolio page](./images/portfolio.png)

Mobile View - Portfolio Page:

<img src="./images/m-portfolio.png" alt="Mobile View - Portfolio Page" width="300">

Desktop / Larger Screens - Resume Page:

![Desktop View - Resume page](./images/resume.png)

Mobile View - Resume Page:

<img src="./images/m-resume.png" alt="Mobile View - Resume Page" width="300">

Desktop / Larger Screens - Contact Page:

![Desktop View - Contact page](./images/contact.png)

Mobile View - Contact Page:

<img src="./images/m-contact.png" alt="Mobile View - Contact Page" width="300">

# License:

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Link to Deployed Application:

[Click here](https://priscillaluong.github.io/my-react-portfolio/)

### Final note:

_Any feedback to improve code or implement best practice would be appreciated_ 😊