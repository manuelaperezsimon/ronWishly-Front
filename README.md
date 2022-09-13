# ronWish.ly

[ronwish.ly](https://mperez-final-project-202207-bcn.netlify.app/) is a SPA where you can save your wishes. You can read, delete or edit your wishes and filter them by limit date.

The technologies used for this proyect were:

### 🔸 Front

React | Redux | SPA | Styled Components | Typescript | Jest | MSW | Toastify

### 🔸 Back

NodeJS | ExpressJS | MongoDB | Mongoose | JWT | Supabase | Jest | Supertest

### 🔸 Tools

Trello | Postman | Figma

## Metrics

📈 [Back SonarCloud metrics](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Manuela-Perez_Back-Final-Project-202207-BCN)

📈 [Front SonarCloud metrics](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Manuela-Perez_Front-Final-Project-202207-BCN)

## Links

🌐✨ [ronWish.ly](https://mperez-final-project-202207-bcn.netlify.app/)

💻🗄 [Back deploy on Heroku](https://mperez-final-project-202207.herokuapp.com/)

🔗 [Original front repository](https://github.com/isdi-coders-2022/Manuela-Perez_Front-Final-Project-202207-BCN)

🔗 [Original back repository](https://github.com/isdi-coders-2022/Manuela-Perez_Back-Final-Project-202207-BCN)

## Back endpoints

`🔹 POST ➡️ .../users/register`  
Register a user. The payload should have a username, password and an repeatpassword.

`🔹 POST ➡️ .../users/login`  
Login with an existing user to get a valid token. The payload should have an existing username and password.

`🔹 GET ➡️ .../wishes`  
Get all the wishes created by the logged user.

`🔹 GET ➡️ .../wishes/:id`  
Get a specific wish.

`🔹 POST ➡️ .../wishes/`  
Create a wish. The payload should have a title, a picture, a limitDate and a description.

`🔹 DEL ➡️ .../wishes/:id`  
Delete a note with it's ID. A note can be deleted only by it's creator.

`🔹 PUT ➡️ .../wishes/:id`  
Edit a note with it's ID. A note can be edited only by it's creator.
