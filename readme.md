
# nodets-auth-stations-api

This is a personal project that I created while taking a course, and I added some cool new features to it! It has APIs for managing users and stations, with authentication to keep things secure. Plus, I added a BullMQ worker job to help handle a lot of stations being saved to a MongoDB database. This project helped me learn a ton of useful stuff about Node.js and TypeScript, like middleware, caching, worker jobs, logging, security, testing, Docker, and more.

-   `morgan`: A popular HTTP request logger for Node.js
-   `hpp`: A middleware to protect against  HTTP Parameter Pollution attacks
-   `helmet`: A middleware to set various  HTTP headers  for security
-   `winston-daily-rotate-file`: Designed to rotate log files on a daily basis, so that logs are separated by date and kept in manageable file sizes.

The project uses Redis for caching.

The project uses the following libraries for worker job  queue handling  and caching:

-   `bullmq`: A powerful Redis-based  job queue library  for Node.js
-   `redis`: A popular in-memory data store and cache

The project uses the following library for implementing  OpenAPI  using  Swagger:

-   `swagger-ui-express`: A middleware for serving  Swagger UI  and providing a  web interface  for exploring and testing  RESTful APIs
-   `Swagger JSDoc`: A library that allows you to write OpenAPI (formerly known as Swagger) specifications in JSDoc comments in your Node.js code.

The project uses PM2 to manage the Node.js process and Nginx as a  reverse proxy  for the Node.js application.

The project uses Docker to containerize the application and its dependencies.

## Technologies


-   Node.js
-   TypeScript
-   MongoDB
-   Redis
-   Nginx

## Libraries
-   Express.js
-   Winston
-   Morgan
-   HPP
-   Helmet
-   Express Rate Limit
-   BullMQ
-   Redis
-   Swagger UI Express

## Tools
-   PM2
-   Docker

## Getting Started
###  Required tech stack

  

In order to run the project, there is a couple of technologies you need to install to your device.

  

- [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [MongoDB](https://www.mongodb.com/docs/manual/installation/) and [Mongo Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/)

- Redis

- Npm or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

- Typescript

###  Environment variables

  

You'll need to set the following environment  variables

ℹ️ You can directly past the variables below in a file called `.env.development.local` inside the folder back

  

ℹ️ Don't forget to create/copy the env variable in a file named `.env.test.local` for testing with Jest 👀


```text
# PORT
PORT = 3002

# DATABASE
DB_HOST = localhost
DB_PORT = 27017
DB_DATABASE = dev

# CACHE
REDIS_URL = 'redis://localhost:6379/1'

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = true

# APIS

STATIONS_STATUS_API_URL= https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json
CRON_TIME=60000
```
###  How to run the Project ?

  

- Install   packages using ➝ `npm install` or `yarn i`

- Run the server in dev mode using➝  `npm run dev` or `yarn dev`

## API Documentation

The project includes  OpenAPI documentation  using Swagger UI, which can be accessed by visiting the following URL in your  web browser:

```bash
http://localhost:3000/api-docs/
```

This will display a web interface for exploring and testing the RESTful APIs.

## Conclusion

This project was a great learning experience for me, and I hope that it serves as a useful code sample  to evaluate my technical skills. If you have any feedback or questions, feel free to reach out to me!