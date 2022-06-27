# AndysList

## Description

*This is a website where users can post workout activities and see other users posts*

 Visit [Trana](https://trana.herokuapp.com/) to see the deployed application.


## Functionality

A user is able to create an account or login into an existing profile. Once logged in they will be able to access their profile page, a list of existing posts, and list of their own posts. What is rendered on the page is specific to each user, including the posts that each user makes and their list of favorited posts. There are full CRUD actions for posts. A user can create, update, and delete their own posts, and see posts made by any user. A user can also comment or like any post that is on the website. All information will persist in the database and will be saved when the user logs out. 


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

# Development

To run this project on you local machine run:

```sh
bundle install
rails db:create
npm install --prefix client
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

*you will need Postgresql installed prior to running this command*

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


## Deploying

To deploy, first log in to your Heroku account using the Heroku CLI:

```sh
heroku login
```

Create the new Heroku app:

```sh
heroku create my-app-name
```

Add the buildpacks for Heroku to build the React app on Node and run the Rails
app on Ruby:

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

To deploy, commit your code and push the changes to Heroku:

```sh
git add .
git commit -m 'Commit message'
git push heroku main
```

