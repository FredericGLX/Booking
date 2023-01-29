# Booking App

A TypeScript application based on booking.com with a NodeJS API and an admin dashboard to manage users, hotels and rooms. Users can define parameters and search for a location and book a room in one of the property available.

## Tools used:

- TypeScript
- Node JS & Express
- MongoDB & Mongoose
- React
- React-router
- React-date-range
- Sass
- Axios
- Fort Awesome

## Features

- Users can search a location and define parameters (dates, number of adults/children, how many rooms). It will return all properties whose city name matches the query. Once a property is selected, you can see its details, click on a picture to see it full-size. If you hit the reserve button, a modal window will display the rooms you can book. Once booked, the room will become unavailable for other users.
- Admin dashboard: Admin users can manage users, hotels and rooms (CRUD).
- Properties listed on the homepage are based on data from the database.
- Authentification
- All the data is stored in MongoDB
