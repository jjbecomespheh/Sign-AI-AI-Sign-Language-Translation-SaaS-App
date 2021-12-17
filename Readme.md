**Readme file for SDS Team CloudOnRails (Team 4)**



# A Collaboration between Team 4, Home Team Science and Technology Agency(HTX) , Singapore University of Science and Technology Information Systems Technology Design(SUTD ISTD) pillar and Google!!

Application description: Home Team Officers are unfamiliar with sign language and are unable to communicate with the deaf who are speech impaired. This language barrier hinders the officers’ ability to communicate and serve the deaf public effectively. This web application aims to solve that using computer vision. Some additional features are added as well. More information at: https://sites.google.com/sutd.edu.sg/team4-cloudonrails/home



Summary of features:

- Automatic sign language transcription for 8 signs
- Type to ask deaf 
- Chat history 
- Cover and tutorial page



Deployed at: https://sign-ai.as.r.appspot.com/home



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

## To run the cucumber test cases
`cd frontend/sign-ai && npm test`

If it fails, run the second time. Make sure you run `npm install` after you do a pull

