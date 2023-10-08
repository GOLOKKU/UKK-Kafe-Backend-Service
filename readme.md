using frontend from
https://github.com/ijlalWindhi/UKK-Kafe-Frontend-Service
some frontend features are broken maybe i write my own

# automated setup script
## note : this script will delete database and image data
run scripts/setup.bat
in terminal
```
setup.bat
```

# how to setup database and backend server manually
```
npm i # install package
npx sequelize-cli db:create # create a database
npx sequelize-cli db:migrate # migrate a database structure
npx sequelize-cli db:seed:all # create admin account
```

# reset the database
```
npx sequelize-cli db:drop # delete a database
rmdir public\image # delete folder
mkdir public\image # recreate folder
```