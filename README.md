# GitHub Profiles

## How can I start the project?

it's not difficult. Follow the steps:

You need to clone this repository,

```
$ git clone https://github.com/SallesCosta/gh-ch-ls.git
```

Being inside the directory, you can run:

> `yarn`

and wait. It may take a few seconds.

run

> `yarn dev`

go to [localhost](http://localhost:3000) and voilà!

  In this project we can find Github users and their repositories with some information.
There's not all the data from the repository, but we have the link to it.
Just enter the name in the input, if there is a user with that name we will be redirected to the UserPage.
In UserPage there is a 'back to SearchPage' button.
For each repository we can see the main language used in this project that the [Github API](https://api.github.com) provides to us.
I registered some different languages and assigned colors to each one. Background and border.
The color chosen on the border will also be used for the 'color' attribute.
If the repository has no specified language, the following tag will be displayed:

<img src='./src/images/Screenshot 2022-03-14 at 20.09.17.png'/>

> This is very common.

This same tag will be displayed if the repository contains a language that is not registered.
Please Pull Request to expand this list of languages colored dynamically.

# Testing

### E2E | Cypress

#### How:

On terminal run `yarn test:e2e`. It will open the Cypress with the tests I did. So it's a good opportunity for PR again. Feel free to.

Any questions? Any suggestions? We can talk about.

Thank you for reading up to this point.

### #Opensource
