# RESTful API User Auth using Node.js

## Demo Video
- app: https://www.loom.com/share/6ef037e927a04c7e8c4b2d541bc56913?sid=776f1b85-2d03-4177-92b0-6af137283749
- api-spec: https://www.loom.com/share/96cfd817bb2540748c3f76e1d5ecd59b?sid=01f68a46-04b9-4c4e-8144-bf5ae0e71990

## Introduction
Hello this is RESTful API user auth with specification:
- User can register and save to database PostgreSQL
- User can login and verify credentials to get JWT Token response
- User can view detail profile with header Authorization Token JWT to get response response

### Architecture
- Routing
- Middleware
- Controller
- Service
- Repository
- Model

### Stack
- JS
- ExpressJS
- Express Validator
- bcrtypt
- dotenv
- faker
- JWT
- PostgreSQL
- Sequelize (ORM)
- Winson (Logger)
- Swagger (API Spec)
- ...

### API Spec Postman Collection
Download link: https://www.postman.com/restless-space-40128/workspace/skill-test/collection/7368471-fb74e6b1-d40e-4762-a437-55ef44be3edd?action=share&creator=7368471

### How to Setup Locally
1. Make sure you have NodeJS, PostgreSQL, Sequelize-CLI, Swagger on your running system
2. Clone this repo by command `git clone https://github.com/ramadoiranedar/se-win.git`
3. Go to root `/` directory the cloned repo using Terminal/Command Prompt
4. Update node modules by command `npm install`
5. Remove .example then adjust Files: `./.env.example`
6. Create database PostgreSQL with name `se_win`
7. Run database migration by command `sequelize db:migrate`
8. Run database seeder by command `sequelize db:seed:all`
9. Run the server by command `node app.js`
10. Try hit endpoint `http://localhost:3000/api/health` and if it success will response json like this:
```
{
    "message": "OK"
}
```

Or with makefile:
1. make sure you have requirements system
2. just run `make all`
3. if you want to run swagger api spec `make run-swagger`


For default user login:
<br>username: `demo@mail.com`
<br>password: `password123`
