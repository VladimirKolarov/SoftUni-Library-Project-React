
This web application is designed and build with the sole purpose to demonstrate knowledge and skills obtained in the SoftUni React JS course. It has no commercial use and very limited practical applications.  
This web application uses and relies on the SoftUni practice server (https://github.com/softuni-practice-server/softuni-practice-server). While all aspects of this web applications developed by me are free to use, for any and all forms of use of the SoftUni practice server, please regard the license that applies to the server and terms and use conditions set by the creator. 

### Features and usage:

This web application contains Navbar, Register, Login pages, Home page and a catalogue (All books page).

### Navbar:

The Navbar contains links to the pages of the application. It changes dynamically depending on weather there is logged in user or not.

### Registration:

In order to register a new user must enter name, email, password and confirm password. 
Name may be any string as long as it is at least 3 characters long.
Email must be a valid email in format {string}@{string}.{string} All strings may contain uppercase characters, lowercase characters and numbers. The first string may also contain dots. 
Password must be at least 8 characters long and must contain uppercase letter, lowercase letter, a number and a special character (- +!@#$%^&*.,?)
Confirm password must match Password.
The Terms and conditions checkbox must be checked.

### Login: 

Must login with a valid registered email and password or with one of the default login emails and passwords provided by the server.

### All books page:

This is a catalogue of all the books in the Books collection. 
There is a search bar that can search the collection by book title or by the name of the author. It is a simple string search and does not require the user to select which parameter is being used. It automatically searches in both the title and the author (or authors).   

### Home page:

This is the first page loaded when the application starts. It presents a random selection of several books to the user. It does not have a search bar. 

### Book details:

The books on the Home page and in the catalogue provide a Details page when clicked. This page gives additional information about the book, like categories and longed description. This page also provides options to edit the properties of the book (title, authors, description, etc.), as well as to delete the book. Only the "owner" of the book (the user that has created the book) is authorized to edit or delete the book, therefore the buttons for those actions are visible only to the book's owner.    
