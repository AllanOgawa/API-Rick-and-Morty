# Rick and Morty API - Project with NestJS

## **Description**

Welcome to the Rick and Morty API documentation!

The animated series *Rick and Morty*, created by Justin Roiland and Dan Harmon, has captivated a fervent fanbase with its interdimensional adventures, eccentric characters, and unique humor. The Rick and Morty API is designed to provide developers with an easy and intuitive way to access detailed information about the expansive universe of the series.

## **What is the Rick and Morty API?**

The Rick and Morty API is a RESTful interface that allows you to retrieve comprehensive data on characters, episodes, locations, and much more related to the *Rick and Morty* universe. Whether you're a developer interested in building an app based on the series or a fan curious about exploring the data, this API provides all the resources you need.

## **About this project**

In this project, we will develop a robust application using the NestJS framework, integrating data from the Rick and Morty API. This application will be structured to meet a set of specific requirements, ensuring complete CRUD functionalities, security through JWT authentication, data validation, exception handling, and performance monitoring.

## **Getting Started**

To start using the Rick and Morty API, simply follow the steps outlined in this documentation. You will find details on how to make API calls, interpret responses, and practical examples to assist with integration. All endpoints are clearly described, along with accepted parameters and response formats.

This documentation is designed to be your comprehensive guide in exploring the series universe, allowing you to effectively and efficiently integrate *Rick and Morty* data. Whether you are a fan of the series or a developer looking for new challenges, the Rick and Morty API is the perfect tool for you.

⚠️ **Note:**  This API is an unofficial tool and is maintained by fans of the series. All related data and materials are the property of Adult Swim and the creators of the series.

Project repository: https://github.com/AllanOgawa/API-Rick-and-Morty.git

Next, check out an overview of the available endpoints and detailed instructions on how to use them.

## **Common structures**

** Character: **
| Atribute | Type | Description |
| --- | --- | --- |
| id | Number | The id of the character. |
| name | string | The name of the character. |
| status | string | The status of the character ('Alive', 'Dead' or 'unknown'). |
| species | string | The species of the character. |
| type | string | The type or subspecies of the character. |
| gender | string | The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). |
| origin | string | Character's origin location. |
| location | string | Character's last known location endpoint. |
| image | string (url) | Link to the character's image. |

** Episode: **
| Atribute | Type | Description |
| --- | --- | --- |
| id | Number | The id of the episode. |
| name | string | The name of the episode. |
| air_date | string | The date when the episode was released. |
| episode | string | The season and episode (ex: "S04E02"). |
| characters | Character[] | The ObjectId of the characters that appear in the episode. |

** Location: **
| Atribute | Type | Description |
| --- | --- | --- |
| id | Number | The id of the location. |
| name | string | The name of the location. |
| type | string | The type of the location (ex: "Planet"). |
| dimension | string | The dimension of the location. |


** Users: **
| Atribute | Type | Description |
| --- | --- | --- |
| username | string | The username  |
| age | Number | The user age |
| email | string | The user email |
| password | string | The user email password |

## Base URL

The base URL for all API requests is:

`http://localhost:3000/`

## First steps

First, make sure the project is running. Then using an API client, in this case Insomnia, look for the CREATE users route, as in the image below:
![01](./documentation%20images/01.png)

Then put your username and password in the body of the request, like this:
![02](./documentation%20images/02.png)

If you receive a 200 response, your user was successfully created. After that, go to
Authentication Login and enter the user and password created earlier. This step is necessary for you to receive your access token to the other routes.
![03](./documentation%20images/03.png)

Then go to the main project folder, click on the arrow and then on Environment. Then paste the token:
![04](./documentation%20images/04.png)
![05](./documentation%20images/05.png)

# Endpoints

## Authentication

### `POST /auth/login`

Authentication of the user to access all routes.

### Example

Request:

```json
POST http://localhost:3000/auth/login

{
	"username": "YourName",
	"password": "YourPassword"
}
```

Response:

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Njc0YjIzYTcyY2ZhZWVhMTQ2NDkyYWQiLCJ1c2VyTWFpbCI6ImFsbGFuIiwiaWF0IjoxNzE4OTI4MjUzLCJleHAiOjE3MTg5MzE4NTN9.JmFaVjeQcTzsD7gKnwoGXdy6B6-1fXR11yjQWHHoGqw"
}
```

## Users

### `POST /users`

Create a new user.

### Example

Request:

```json
POST http://localhost:3000/users/

{
	"username": "YourName",
	"password": "YourPassword",
	"age": 20,
	"email": "Your@gmail.com" 
}
```

Response:

```json
{
	"username": "YourName",
	"password": "$2b$10$rwcetH/TLrwy4PyHEMx9keLCO1KKIzwtLZeJh8O9qlPhKYNdvfDa.",
	"age": 20,
	"email": "Your@gmail.com",
	"_id": "6674eb3c7ea9e0fefc20d3a6",
	"createdAt": "2024-06-21T02:53:48.220Z",
	"updatedAt": "2024-06-21T02:53:48.220Z",
	"__v": 0
}
```

### `GET /users`

Return a list of all users (acessible only when user is authenticated).

### Example

Request:

```json
GET http://localhost:3000/users/
```

Response:

```json
[
	{
		"_id": "6674dc1d7ea9e0fefc20d3a1",
		"username": "YourName",
		"age": 20,
		"email": "Your@gmail.com",
		"createdAt": "2024-06-21T01:49:17.346Z",
		"updatedAt": "2024-06-21T01:49:17.346Z",
		"__v": 0
	},
	{
		"_id": "6674eb3c7ea9e0fefc20d3a6",
		"username": "YourName",
		"age": 20,
		"email": "Your@gmail.com",
		"createdAt": "2024-06-21T02:53:48.220Z",
		"updatedAt": "2024-06-21T02:53:48.220Z",
		"__v": 0
	}
	...
]
```

### `GET /users/username`

Return the data of one user by username (acessible only when user is authenticated).

### Example

Request:

```json
GET http://localhost:3000/users/YourName
```

Response:

```json
{
	"_id": "6674d91334314968f87f2bf9",
	"username": "YourName",
	"password": "$2b$10$Hy52WPmVqHQ8aVGW05Yyz.1RyzRnqsIQTI81un3Qg4TOiqhn9DOQu",
	"age": 20,
	"email": "Your@gmail.com",
	"createdAt": "2024-06-21T01:36:19.875Z",
	"updatedAt": "2024-06-21T01:36:19.875Z",
	"__v": 0
}
```

## Location

### `GET /location`

Returns a list of all locations (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/location
```

Response:
```json
[
	{
		"_id": "6674ca8f7d9cd0271240401b",
		"id": 1,
		"__v": 0,
		"createdAt": "2024-06-21T00:34:23.378Z",
		"dimension": "Dimension C-137",
		"name": "Earth (C-137)",
		"type": "Planet",
		"updatedAt": "2024-06-21T00:34:23.378Z"
	},
	{
		"_id": "6674ca8f7d9cd0271240401d",
		"id": 2,
		"__v": 0,
		"createdAt": "2024-06-21T00:34:23.379Z",
		"dimension": "unknown",
		"name": "Abadango",
		"type": "Cluster",
		"updatedAt": "2024-06-21T00:34:23.379Z"
	},
	...
]
```

### `GET /location/id`

Returns one location by id (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/location/7
```

Response:

```json
{
	"_id": "6674ca8f7d9cd02712404027",
	"id": 7,
	"__v": 0,
	"createdAt": "2024-06-21T00:34:23.382Z",
	"dimension": "unknown",
	"name": "Immortality Field Resort",
	"type": "Resort",
	"updatedAt": "2024-06-21T00:34:23.382Z"
}
```

### `POST /location`

Create a new location (acessible only when user is authenticated).

### Example

Request:

```
POST http://localhost:3000/location/

{
	"id": 127,
	"dimension": "Dimension C-137",
	"name": "Pluto (C-137)",
	"type": "Planet"
}
```

Response:

```json
{
	"id": 127,
	"name": "Pluto (C-137)",
	"type": "Planet",
	"dimension": "Dimension C-137",
	"_id": "6674cb3334314968f87f2bf5",
	"createdAt": "2024-06-21T00:37:07.363Z",
	"updatedAt": "2024-06-21T00:37:07.363Z",
	"__v": 0
}
```


### `PUT /location/id`

Update the data of a location by id (acessible only when user is authenticated).

### Example

Request:

```
PUT http://localhost:3000/location/127

{
	"type": "NOT a Planet"
}
```

Response:

```json
{
	"_id": "6674cb3334314968f87f2bf5",
	"id": 127,
	"name": "Pluto (C-137)",
	"type": "NOT a Planet",
	"dimension": "Dimension C-137",
	"createdAt": "2024-06-21T00:37:07.363Z",
	"updatedAt": "2024-06-21T00:37:09.923Z",
	"__v": 0
}
```

### `DELETE /location/id`

Delete a location by id (acessible only when user is authenticated).

### Example

Request:

```json
DELETE http://localhost:3000/location/127

```

Response:

```json
{
	"_id": "6674cb3334314968f87f2bf5",
	"id": 127,
	"name": "Pluto (C-137)",
	"type": "NOT a Planet",
	"dimension": "Dimension C-137",
	"createdAt": "2024-06-21T00:37:07.363Z",
	"updatedAt": "2024-06-21T00:37:09.923Z",
	"__v": 0
}
```

## Episodes

### `GET /episode`

Returns a list of all episodes and the characters that appear in it (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/episodes/
```

Response:

```json
[
	{
		"_id": "6674ca8e7d9cd02712403ad5",
		"id": 1,
		"__v": 0,
		"air_date": "December 2, 2013",
		"characters": [
			"6674ca8d7d9cd0271240344c",
			"6674ca8d7d9cd0271240344e",
			"6674ca8d7d9cd02712403490",
			"6674ca8d7d9cd02712403496",
			"6674ca8d7d9cd027124034c6",
			"6674ca8d7d9cd02712403502",
			"6674ca8e7d9cd02712403548",
			"6674ca8e7d9cd0271240356a",
			"6674ca8e7d9cd02712403586",
			"6674ca8e7d9cd027124035a8",
			"6674ca8e7d9cd027124035b0",
			"6674ca8e7d9cd027124035b4",
			"6674ca8e7d9cd02712403628",
			"6674ca8e7d9cd0271240363c",
			"6674ca8e7d9cd02712403668",
			"6674ca8e7d9cd027124036ee",
			"6674ca8e7d9cd0271240375e",
			"6674ca8e7d9cd02712403760",
			"6674ca8e7d9cd027124037b0"
		],
		"createdAt": "2024-06-21T00:34:22.597Z",
		"episode": "S01E01",
		"name": "Pilot",
		"updatedAt": "2024-06-21T00:34:22.597Z"
	},
	...
]
```

### `GET /episode/id`

Returns a list of one episode by id (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/episode/4
```

Response:

```json
{
	"_id": "6674ca8e7d9cd02712403b13",
	"id": 4,
	"__v": 0,
	"air_date": "January 13, 2014",
	"characters": [
		"6674ca8d7d9cd0271240344c",
		"6674ca8d7d9cd0271240344e",
		"6674ca8d7d9cd02712403496",
		"6674ca8d7d9cd027124034f8",
		"6674ca8e7d9cd027124035a8",
		"6674ca8e7d9cd027124035b0",
		"6674ca8e7d9cd027124035b4",
		"6674ca8e7d9cd027124035c8",
		"6674ca8e7d9cd02712403628",
		"6674ca8e7d9cd0271240362c",
		"6674ca8e7d9cd02712403666",
		"6674ca8e7d9cd027124036ec",
		"6674ca8e7d9cd027124036ee"
	],
	"createdAt": "2024-06-21T00:34:22.640Z",
	"episode": "S01E04",
	"name": "M. Night Shaym-Aliens!",
	"updatedAt": "2024-06-21T00:34:22.640Z"
}
```

### `POST /episode`

Create a new episode (acessible only when user is authenticated).

### Example

Request:

```
POST http://localhost:3000/episode/

{
	"id": 52,
	"characters": [
		"667227750a8655d7ace67877",
		"667227750a8655d7ace67879"
	],
	"name": "Solaricks",
	"air_date": "September 4, 2022",
	"episode": "S06E01"
}
```

Response:

```json
{
	"id": 52,
	"name": "Solaricks",
	"air_date": "September 4, 2022",
	"episode": "S06E01",
	"characters": [
		"667227750a8655d7ace67877",
		"667227750a8655d7ace67879"
	],
	"_id": "6674cb1934314968f87f2bef",
	"createdAt": "2024-06-21T00:36:41.648Z",
	"updatedAt": "2024-06-21T00:36:41.648Z",
	"__v": 0
}
```

### `PUT /episode/id`

Update the data of a episode by id (acessible only when user is authenticated).

### Example

Request:

```
PUT http://localhost:3000/episode/52

{
	"name": "Solaricks!!",
	"air_date": "September 25, 2022"
}
```

Response:

```json
{
	"_id": "6674cb1934314968f87f2bef",
	"id": 52,
	"name": "Solaricks!!",
	"air_date": "September 25, 2022",
	"episode": "S06E01",
	"characters": [
		"667227750a8655d7ace67877",
		"667227750a8655d7ace67879"
	],
	"createdAt": "2024-06-21T00:36:41.648Z",
	"updatedAt": "2024-06-21T00:36:44.102Z",
	"__v": 0
}
```

### `DELETE /location/id`

Delete a episode by id (acessible only when user is authenticated).

### Example
Request:

```json
DELETE http://localhost:3000/episode/52

```

Response:

```json
{
	"_id": "6674cb1934314968f87f2bef",
	"id": 52,
	"name": "Solaricks!!",
	"air_date": "September 25, 2022",
	"episode": "S06E01",
	"characters": [
		"667227750a8655d7ace67877",
		"667227750a8655d7ace67879"
	],
	"createdAt": "2024-06-21T00:36:41.648Z",
	"updatedAt": "2024-06-21T00:36:44.102Z",
	"__v": 0
}
```

## Character

### `GET /character`

Returns a list of all characters (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/character/
```

Response:

```json
[
	{
		"_id": "6674ca8d7d9cd0271240344c",
		"id": 1,
		"__v": 0,
		"createdAt": "2024-06-21T00:34:21.882Z",
		"gender": "Male",
		"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
		"location": "Citadel of Ricks",
		"name": "Rick Sanchez",
		"origin": "Earth (C-137)",
		"species": "Human",
		"status": "Alive",
		"type": "",
		"updatedAt": "2024-06-21T00:34:21.882Z"
	},
	...
]
```

### `GET /character/id`

Returns one character by id (acessible only when user is authenticated).

### Example

Request:

```
GET http://localhost:3000/character/6
```

Response:

```json
{
	"_id": "6674ca8d7d9cd02712403456",
	"id": 6,
	"__v": 0,
	"createdAt": "2024-06-21T00:34:21.897Z",
	"gender": "Female",
	"image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
	"location": "Abadango",
	"name": "Abadango Cluster Princess",
	"origin": "Abadango",
	"species": "Alien",
	"status": "Alive",
	"type": "",
	"updatedAt": "2024-06-21T00:34:21.897Z"
}
```

### `POST /character`

Create a new character (acessible only when user is authenticated).

### Example

Request:

```
POST http://localhost:3000/character/

{
	"id": 827,
	"name": "Code",
	"status": "Alive",
	"species": "Werewolf",
	"gender": "Male",
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	"location": "Earth (Replacement Dimension)",
	"origin": "Earth (Replacement Dimension)",
	"type": ""
}
```

Response:

```json
{
	"id": 827,
	"name": "Code",
	"status": "Alive",
	"species": "Werewolf",
	"type": "",
	"gender": "Male",
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	"origin": "Earth (Replacement Dimension)",
	"location": "Earth (Replacement Dimension)",
	"_id": "6674cad134314968f87f2be9",
	"createdAt": "2024-06-21T00:35:29.400Z",
	"updatedAt": "2024-06-21T00:35:29.400Z",
	"__v": 0
}
```

### `PUT /character/id`

Update the data of a character by id (acessible only when user is authenticated).

### Example

Request:

```
PUT http://localhost:3000/character/827

{
	"status": "Dead",
	"origin": "Earth (C-137)",
}
```

Response:

```json
{
	"_id": "6674cad134314968f87f2be9",
	"id": 827,
	"name": "Code",
	"status": "Dead",
	"species": "Werewolf",
	"type": "",
	"gender": "Male",
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	"origin": "Earth (Replacement Dimension)",
	"location": "Earth (C-137)",
	"createdAt": "2024-06-21T00:35:29.400Z",
	"updatedAt": "2024-06-21T00:35:42.474Z",
	"__v": 0
}
```

### `DELETE /location/id`

Delete a character by id (acessible only when user is authenticated).

### Example

Request:

```
DELETE http://localhost:3000/character/827
```

Response:

```json
{
	"_id": "6674cad134314968f87f2be9",
	"id": 827,
	"name": "Code",
	"status": "Dead",
	"species": "Werewolf",
	"type": "",
	"gender": "Male",
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	"origin": "Earth (Replacement Dimension)",
	"location": "Earth (C-137)",
	"createdAt": "2024-06-21T00:35:29.400Z",
	"updatedAt": "2024-06-21T00:35:42.474Z",
	"__v": 0
}
```

## Errors

### `GET/error`

Returns the log of errors saved in the database  (acessible only when user is authenticated).

### Example

Request:

```json
GET http://localhost:3000/error
```

Response:

```json
[
	{
		"_id": "6674a9b07264cde7c9b47625",
		"message": "Http Exception",
		"stack": "HttpException: Http Exception\n    at CharacterController.update (C:\\Users\\allan\\Desktop\\API Rick and Morty\\API Rick and Morty\\src\\character\\character.controller.ts:70:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
		"context": "PUT /character/827",
		"createdAt": "2024-06-20T22:14:08.504Z",
		"updatedAt": "2024-06-20T22:14:08.504Z",
		"__v": 0
	},
    ...
]
```

### `PUT/character/id`

Forcing Error with the PUT on the character route.

### Example

Request:

```
PUT http://localhost:3000/character/4

{
	"id" : "test"
}
```

Response:

```json
{
	"status": 403,
	"error": "Error updating character data"
}
```