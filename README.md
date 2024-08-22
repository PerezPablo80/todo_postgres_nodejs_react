# This project is just a TODO listing showing the full stack development.

# NodeJS project initialization - backend side.

For initializing the nodeJS project you need to create it and install the libraries needed.
This is done by:

`npm install express dotenv sequelize pg cors`

if using our git, just clone the git and use `npm install` that will install all the packages needed.

This will install the express server, the sequelize ORM for the database, the pg connector for postgress and the dotenv for easy access to the .env file

you will need to modify the backend/db/db.config or db.config.heroku in order to use the database with your own credentials
