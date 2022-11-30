# Social Media sample project

## Database setup

```shell
$ mysql -u root -p
```

```mysql
create database samplesocialmediadb;
create user samplesocialuser identified with mysql_native_password by 'samplesocialpass';
grant all privileges on samplesocialmediadb.* to samplesocialuser;
flush privileges;
```

## Project Structure

### Backend (server)

```
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site (it's actually frontend)
└── routes              # express middlewares (route wise)
```

### Frontend (client side)

```
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
```

## Business Logic

### User

1. **Create user**
   this will create a user with a random username

### Posts

1. **Create posts**
   this will create new posts, require fields are :

    - username (the author of the post)
    - title
    - body

2. **Show all posts**
   list all posts, we should have following filtering support:

    - filter by username
    - filter by query contained in title (search by title)

3. **Edit posts** `TBD`
4. **Delete Posts** `TBD`

### Comments

1. **Show all comments of a user**

2. **Show all comments under a post**

3. **add a comments**

=============================================================

## API Documentation

### Users

1. `POST /users`

create a new user with a random username and an user id

2. `GET /users/{userid}`

Get an user with the given userid

3. `GET /users/{username}`

Get an user with the given username

### Posts

1. `GET /posts`

get all post by everyone

2. `POST /posts`

creates a new posts
Required fields in body-

```
userId :
title :
body :
```

=============================================================

## New Things

### Project making

**There are two approaches to make a project**

1. Top down # (front end first then backend & db (for pros))
2. Bottom up (first db then we move on to front (for noobs))
