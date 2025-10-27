The app.js file is all about setting up that Express application with the right middleware.
The server.js is all about running that server implementing some login so evrything else to make sure that the server is running properly.
The index.js is just like a starting point.

FOLDERS
The config folder is for all different kinds of configurations.
The controllers folder, has a lot to do with the model view controller paradigm in developing backend applications.
The middleware folder, are functions that are run before or after some other functions that our app does. Maybe logging functions so whenever a request is made, you can see what happened. Or maybe authentication or verification actions to make sure that when somebody tries to perform a specific API action, the middle ware checks whether that user has the permissions to do.
The models folder, has to do with defining how our database schemas and models look like.
The routes folder, we will define our API routes.
The services folder.
The utils folder.
The validations folder, will have different kinds of validations within our application.
