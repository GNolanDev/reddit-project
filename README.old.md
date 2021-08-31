# reddit-project

## Aim
Produce and deploy a webpage making use of React-Redux to display user-searchable content from Reddit.

## Interpretation & Discussion :thought_balloon:
See exemplar provided by Codecademy [here](https://reddit-client.netlify.app/).
The idea seems to be to demonstrate use of react-redux, make use of version control and testing, and deploy a working 'application'.
Having read the brief and explored the exemplar, it became apparent that this functionality did not seem to demand the react-redux strategy, and could be produced easily enough using plain javascript. To elaborate:
### React.
- Purpose? For making reusable components across applications and for allowing components to update themselves without re-rendering the whole page.
- Why is it unnecessary here? Calls to the Reddit API could be made, functions could be called for each post to add the appropriate content and appendChild() and innerHTML could be used to add the content to the screen. Very little is changing dynamically on the page, and the only interaction is to make comments visible which could be done by adding/removing a css class (the voting buttons don't actually do anything in the exemplar, just change the arrow style). If other pages were to be made, or this was to be part of a larger, busier page with other constantly updating components (eg facebook), then it *would* make sense to go with React.
### Redux.
- Purpose? For organising the flow of data, from user interactions to the store (via actions and perhaps asynchronous thunks) and then from the store (a single source of truth for the page) to various dependent visible components to update the view. Particularly useful in complex single page apps where data management would otherwise be awkward and error-prone.
- Why is it unnecessary here? There is very little data management to do - only one component really needs to know about the "posts" data - the list of posts; only one component needs to know about the list of subreddits - the list of subreddits. The selected subreddit being highlighted does make use of store data, but this could be done in other ways. The only user action which affects the view is the search function, but this could easily be handled by an onClick handler, causing a filtering of the array of posts and a re-rendering by the same function which originally set the innerHTML of the list of posts. The "Model-View-Controller" system could be maintained without recourse to the setting up of a "store" with its reducers/actions etc. If other components on the page were to be updated from the same data, or further data from other sources was to be displayed within each of the "Post" components, it would make sense to stick with the Redux architecture.
## Adjustments
To make the project a slightly more suitable vehicle for react-redux, I need to add:
- more than one component type that makes use of the same data, making a store a sensible solution to the problem of providing a single source of truth
- user interaction from multiple components which can change the data being utilised across other components on the page
## New Aim
To create a single page application which:
- displays a list of subreddits as collected from the Reddit API
- displays a list of posts from the chosen subreddit
