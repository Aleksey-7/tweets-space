# Tweets-space

This application consists of Home and Tweets pages. Homepage is page for welcome
and general information. The Tweetspage loads user cards from the database. By
clicking on the Follow or Following buttons in the card, you can subscribe or
unsubscribe to a user.

<img src='/src/images/card-template.jpg'>

# Technologies used:

1. React
2. React Router
3. Axios
4. MockAPI
5. Styled-components

# API

The app uses the MockAPI service to simulate a backend. The users resource has
been created and the user object has the following fields: id, user, tweets,
followers, avatar. Pagination, filtering implemented through the backend.

# Routes:

'/' - Homepage,  
 '/tweets' - Tweetspage
