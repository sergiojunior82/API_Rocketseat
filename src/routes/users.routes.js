const { Router } = require("express");
const UsersController = require("../controllers/UsersController")
const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware")
  console.log(request.body);

  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  }
  next();
}

const usersController = new UsersController();


usersRoutes.post("/", myMiddleware, usersController.create)


//usersRoutes.post("/", myMiddleware, usersController.create)

//exportando para acessar fora
module.exports = usersRoutes;