# Hello! Welcome to the TodoApp API

## How to start the server

Make sure that you have nodemon installed and Follow the commands:

- npm i
- npm start

Things to consider:

- Auth0 was used for user authentication. By changing the configurations in the auth0 console we could also use it for user authorization, but for the purpose of this project it is not supported.

- A user_email was added to the Todo models, but a better option would be to authorize the user and add it's data to our db after creating an auth0 user. This would also allow is to pass the authorized user in the Apollo context, giving us access to it without having to pass the user_email from the frontend when making requests.

- In a normal setting, we also shouldn't expose secrets or export .env configurations but they'll be exported here for ease of access. We could use a combination of services like AWS secrets manager and terraform in order to get all credentials needed.

- We should also be testing our functions and handle errors in more depth but for the purpose of this application they were ommited.
