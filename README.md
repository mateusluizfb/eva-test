# Eva app

The project is split in two, the backend and the frontend. This means that you have to do the setup for both of them.

### Backend setup

Docker:
1. Install docker
2. Run `docker-compose up mongo -d` to start the mongo database
3. Run `docker-compose up redis -d` to start the redis database

Server:
1. Use node version >= 16.10.0
2. Install dependencies with `npm install`
3. Run `npm run start:server` to start the server
4. In another terminal tab, run `npm run start:worker` to start the worker. This is needed for the job queue to work.
5. Run the seed script with `node scripts/seedDb.js` to seed the database with some dummy data.

### Frontend setup

1. Use node version >= 16.10.0
2. `cd app`
3. Install dependencies with `npm install`
4. Run `npm start`
5. You can also run the app from the root folder with `npm run start:app`

## Architecture

The server follows a layered architecture. It contains controllers, services, models. Aside from the stard back-end that handles request, responses and server stuff we also have a background job worker.

The worker is backed by BullJs. When the server receives a schedule request, it will enqueue a job in the queue. The worker will then pick up the job and execute it. This is useful for tasks that take a long time to complete, like sending emails or processing images.

As for the front-end, is a very simple React app. It uses hooks and lets the user schedule a journey start for a given user and a given time.

## Future improvements

- Move all DB queries to repositories. It it will make testing the code easier and it will decouple the business logic from the DB.
- Create a generic queue factory function that contains all the logic for creating a queue. It will abstract the lib we use for the queue and make it easier to switch to another one. The interface would be the same.