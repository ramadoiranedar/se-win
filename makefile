.PHONY: install migrate seed swagger start-swagger start-server

# make install for dependencies
install:
	npm install

# make migrate for running migration database
migrate:
	npx sequelize-cli db:migrate

# make seed for running seeder database
seed:
	npx sequelize-cli db:seed:all

# make run-swagger for running swagger server API SPEC
run-swagger:
	node swagger.js

# make run for running server
run:
	node index.js

# make all
all:
	install migrate seed run
