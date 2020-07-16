# Pushpay fork changes

1. The API url used by default is `https://api.catapult.inetwork.com/`. Change it to `https://messaging.bandwidth.com/api` instead.
2. Change some environment variable names to be more relevant.
3. Remove the `applicationId` from the message payload before writing it to the database.

# Bandwidth Messaging API Sample App

This app demonstrates how you can build a small server that works with Bandwidth's Messaging API. It will send and receive messages, store them and retrieve them, provide conversation threading, and provide a web interface that updates in realtime.
![img](screenshot.png)

## Prerequisites

To use this sample, you will need a Messaging-enabled Bandwidth Account, and a MariaDB database to store your messages. This guide assumes that you already have MariaDB set up, and an empty schema called `messaging` created for use with this app. You will also need Node.js installed to run this sample.

## Setup

Download the source code:

    $ git clone https://github.com/BandwidthExamples/messaging-sample-app.git
    $ cd messaging-sample-app

### Set environment variables

You will need to fill in the appropriate values for your database connection, and API credentials in the `.env` file in the root of the project directory.

```
PORT=5000
USERNAME=messaging
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=messaging

BANDWIDTH_ACCOUNT_ID=
BANDWIDTH_API_TOKEN=
BANDWIDTH_API_SECRET=

APPLICATION_ID=
APPLICATION_NUMBER=<'from' phone number>
```

### Set the application number in the front end

You will also need to set your Application Number in the front end for the UI to display correctly. Edit `/client/.env` and set your number:

```
REACT_APP_APPLICATION_NUMBER=<'from' phone number>
```

### Create the database schema

You can use [Flyway](https://flywaydb.org/) to run the SQL migration script to create your schema. For example if you are running the DB on `localhost` you should be able to use the following command:
Flyway

    $ flyway -user=root -password="" -locations=filesystem:sql -url=jdbc:mariadb://localhost:3306/messaging migrate

Alternatively, you could just copy/paste the contents of the `sql/V1__create_schema.sql` file into your favorite SQL tool to create the schema.

## Install Node.js dependencies

(Note: I think it requires Node 12 and only works on Linux? I tried building it on macOS Catalina with different Node versions but no luck ¯\_(ツ)_/¯.)

    $ npm run install:all

## Build and run

    $ npm start
    Server listening on port 5000

## Start messaging!

Open a web browser and point it to `http://localhost:5000`
