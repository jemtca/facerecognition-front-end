> There is an existing user on **Heroku** in case someone doesn't wish to register ;-)
> * **Email**: guest@guest.ca
> * **Password**: guest

# FaceRecognition Project
Repository to upload the facerecognition project (front-end) and explain how to run it on **macOS**.

## About
Web application implementing the PERN stack (PostgreSQL - Express - React - Node) that detects human faces in an image and coordinate locations of where those faces appear with a bounding box.

* Initial idea
    * Recognize a human face in a picture.

* Improvements/fixes once the app was finished
	* Recognize more than one human face in a picture.
	* Add a new feature to the component than handles the face recognition: show if the picture has one face, several ones or none.
	* Use of the state object.
	* Error handling improved to get error messages and avoid the app crashing.
	* Fixed an issue where when a user logged out was redirected to the registration form instead of sign-in form.
	* Fixed an issue where when a user logged out and a new user logged in, the new user could see some information from the previous user.
	* Fixed an issue where a user could log in or register without some information or any.
	* Fixed an issue where Clarifai API key was exposed when there was a communication between the front-end and the Clarifai API.
	* Use of dependency injection.
	* Use of environmental variables.

## Screenshot
![](https://github.com/jemtca/facerecognition-front-end/blob/master/screenshots/facerecognition.gif)

## Technologies Used
* HTML, CSS, JavaScript.
* npm (packages used): [create-react-app](https://www.npmjs.com/package/create-react-app), [tachyons](https://www.npmjs.com/package/tachyons), [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt), [tsparticles](https://www.npmjs.com/package/tsparticles), [react-tsparticles](https://www.npmjs.com/package/react-tsparticles), [nodemon](https://www.npmjs.com/package/nodemon), [express](https://www.npmjs.com/package/express), [cors](https://www.npmjs.com/package/cors), [bcrypt](https://www.npmjs.com/package/bcrypt-nodejs), [knex](https://www.npmjs.com/package/knex), [pg](https://www.npmjs.com/package/pg).
* APIs: [Clarifai](https://www.clarifai.com/), [Postman](https://www.postman.com/).
* Database: [PostgreSQL](https://www.postgresql.org/).
* Cloud service: [Heroku](https://www.heroku.com/).

## How to run the project (front-end)
* Open the terminal.
* Clone the repository: **`git clone https://github.com/jemtca/facerecognition-front-end.git`**
* Go to the project folder: **`cd facerecognition-front-end`**
* Install dependencies/packages: **`npm install`**
* Run the app: **`npm start`**

## How to create a database and how to run the whole project
* Explained [here](https://github.com/jemtca/facerecognition-back-end).

## Images
* [Example 1](https://imgix.ranker.com/user_node_img/83/1648992/original/natalie-portman-recording-artists-and-groups-photo-u300).
* [Example 2](https://static.zennioptical.com/marketing/campaign/summer_kids_2019/070219_kids_summer_refresh_assets/kids_glasses_style_squad_og.jpg).
* [Example 3](https://dana.org/app/uploads/2023/08/investigating-individual-differences-brain-july-news-2019.jpeg).
