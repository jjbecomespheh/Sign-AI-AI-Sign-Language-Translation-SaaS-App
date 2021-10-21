**Readme file for SDS Team CloudOnRails (Team 4)**

_*add anything here_
# Let's begin the magic! ;)

```
YOU MUST RUN THE BACKEND CODE B4 FRONTEND FOR MAGIC TO WORK
```
## To run the backend server

### To run the server you first need to start the db which was deployed on glcoud, however, you will need the access to it.
***To setup database gcp to use on local***    
Go here: https://cloud.google.com/sql/docs/postgres/sql-proxy#linux-64-bit and install cloud sql proxy for your machine respectively    
Then, run this on a terminal: `cloud_sql_proxy -instances=sign-ai:asia-southeast1:sign-ai-db=tcp:5432`    
Now,start the backend server normally and magic should happen

### To start the backend server
`cd backend`    
`bundle install && bin/rails server`    
the backend server will be started on localhost:8000

### Ruby version error
Just change the gemfile to the version you used

## To run the frontend side
`cd frontend/sign-ai && npm install`   
`npm start`    
the frontend side will be started on localhost:3000