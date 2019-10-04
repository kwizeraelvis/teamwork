# Teamwork: Andela Developer Challenge

[![Maintainability](https://api.codeclimate.com/v1/badges/b8c310027450677d17be/maintainability)](https://codeclimate.com/github/kwizeraelvis/teamwork/maintainability) [![Build Status](https://travis-ci.com/kwizeraelvis/teamwork.svg?branch=develop)](https://travis-ci.com/kwizeraelvis/teamwork)  [![Coverage Status](https://coveralls.io/repos/github/kwizeraelvis/teamwork/badge.svg?branch=develop)](https://coveralls.io/github/kwizeraelvis/teamwork?branch=develop)

## Table of contents

- [Teamwork: Andela Developer Challenge](#teamwork-andela-developer-challenge)
  - [Table of contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [Features](#features)
  - [Endpoints](#endpoints)
  - [Documentation](#documentation)
  - [Templates](#templates)
  - [Status](#status)
  - [Shoutouts](#shoutouts)
  - [Licence](#licence)

## General Info

Teamwork is an internal social network for organizations’ employees. The goal of this
application is to facilitate more interaction between colleagues and facilitate team bonding.

## Technologies Used

- HTML5
- CSS3
- NodeJS
- Express
- ES6

## Setup

- clone the repository using `git clone https://github.com/kwizeraelvis/teamwork.git`
- Move into project directory using `cd teamwork`
- Install neccesary packages using `npm install`
- Build the source using `npm run build`
- Start the server using `npm run start`
- Interface the API using postman or any other http client

## Features

- User can create an account
- User can login
- User can post/create an article
- User can update his/her article
- User can delete his/her article
- User can view all available articles on the platform

## Endpoints

| Endpoint                      | Method           |Functionalities                            |
|-------------------------------|------------------|-------------------------------------------|
| /auth/signup                  | POST             | Create user account                       |
| /auth/signin                  | POST             | Sigin into account                        |
| /articles                     | POST             | Create a new article                      |
| /article/:article_id          | PUT              | Edit a particular article                 |
| /articles/:article_id         | DELETE           | Delete an article                         |
| /feeds                        | GET              | Get all available articles                |
| /feed/me                      | GET              | Get all the articles for the current user |
| /articles/:articleId/comments | POST             | Create/Post a comment                     |

## Documentation

The API documentation can be found at : <https://documenter.getpostman.com/view/5540374/SVfWMRjc>

## Templates

The UI Templates can be found  at : <https://kwizeraelvis.github.io/teamwork/UI>

## Status

The project is still under development

## Shoutouts

1. Rukundo Eric
2. Amily Kasim

## Licence

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- Copyright (c) Kwizera Aime Elvis
