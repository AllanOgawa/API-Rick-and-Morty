# Rick and Morty API - Project with NestJS

## **Description**

Welcome to the Rick and Morty API documentation!

The animated series *Rick and Morty*, created by Justin Roiland and Dan Harmon, has captivated a fervent fanbase with its interdimensional adventures, eccentric characters, and unique humor. The Rick and Morty API is designed to provide developers with an easy and intuitive way to access detailed information about the expansive universe of the series.

## **What is the Rick and Morty API?**

The Rick and Morty API (https://rickandmortyapi.com) is a RESTful interface that allows you to retrieve comprehensive data on characters, episodes, locations, and much more related to the *Rick and Morty* universe. Whether you're a developer interested in building an app based on the series or a fan curious about exploring the data, this API provides all the resources you need.

## **About this project**

In this project, we will develop a robust application using the NestJS framework, integrating data from the Rick and Morty API. This application will be structured to meet a set of specific requirements, ensuring complete CRUD functionalities, security through JWT authentication, data validation, exception handling, and performance monitoring.

## **Getting Started**

To start using the Rick and Morty API, simply follow the steps outlined in this documentation. You will find details on how to make API calls, interpret responses, and practical examples to assist with integration. All endpoints are clearly described, along with accepted parameters and response formats.

This documentation is designed to be your comprehensive guide in exploring the series universe, allowing you to effectively and efficiently integrate *Rick and Morty* data. Whether you are a fan of the series or a developer looking for new challenges, the Rick and Morty API is the perfect tool for you.

⚠️ **Note:**  This API is an unofficial tool and is maintained by fans of the series. All related data and materials are the property of Adult Swim and the creators of the series.

Project repository: https://github.com/AllanOgawa/API-Rick-and-Morty.git

Next, check out an overview of the available endpoints and detailed instructions on how to use them.

## **Common structures**

### Character:
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

### Episode: 
| Atribute | Type | Description |
| --- | --- | --- |
| id | Number | The id of the episode. |
| name | string | The name of the episode. |
| air_date | string | The date when the episode was released. |
| episode | string | The season and episode (ex: "S04E02"). |
| characters | Character[] | The ObjectId of the characters that appear in the episode. |

### Location:
| Atribute | Type | Description |
| --- | --- | --- |
| id | Number | The id of the location. |
| name | string | The name of the location. |
| type | string | The type of the location (ex: "Planet"). |
| dimension | string | The dimension of the location. |


### Users:
| Atribute | Type | Description |
| --- | --- | --- |
| username | string | The username  |
| age | Number | The user age |
| email | string | The user email |
| password | string | The user email password |
