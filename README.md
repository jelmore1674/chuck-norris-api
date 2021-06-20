# Chuck Norris Joke App

This is a simple app using the
[Chuck Norris Joke API](https://api.chucknorris.io/jokes/random). It displays a
random joke on load and when you click the button to change the joke.

## Tech Behind the app

For this app I used React to create the App. Now, there is only one component.
Which, I didn't have to use React; however, I wanted to practice using CSS
modules. Now, I could break this app down to a few different components. The
App, which everything would be put into. I could have created a separate header
component, but I didn't feel the need to do that since this is mostly a static
app. I could have broken the button into it's own component, but I am not
reusing it, so I just put everything into a JokeBody component. Which, I used
CSS modules to create the CSS. I am using the fetch.then.then method. Which I
could have easily used to async await method, but this is a real simple app, so
I didn't feel the need to.

### Issues I ran into...

While creating this app, I did have a few problems. One being able to change the
state onClick. When I created my on click function I kept getting an error.
After some research I found a simple solution. I had to bind the _this_ to the
handleClick funtion.

Here is my handleClick function

`handleClick() { fetch('https://api.chucknorris.io/jokes/random').then((data) => data.json().then((jokes) => this.setState({ joke: jokes.value })) ); }`

I kept getting a setState not defined error when calling handleClick like this.
When

`onClick={this.handleClick}`

The solution was to add the bind method to it

`onClick={this.handleClick.bind(this)}`
