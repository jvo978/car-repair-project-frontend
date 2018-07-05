<h1>Car Repair Tracker front end</h1>

<h2>User Story & Wireframe</h2>

AS A USER, I want to sign up, so I can track my repairs.

AS A USER, I want to sign in, so I can view repairs on my account.

AS A USER, I want to sign out, since I am finish viewing/updating my repairs.

AS A USER, I want to change my password, because I want a more secured password.

AS A USER, I want to update my car repairs, and see the updated info.

AS A USER, I want to add cars to my list, so I can see all my car info.

As A USER, I want to delete each car off my list, once it is completed.

https://imgur.com/a/U1iQspO

<h2>Repositories for application</h2>
https://github.com/jvo978/cars-repair-project-api
<p>This repository is the back end side of this application. The api/database for this application stores data in this case cars and handles the request from the client side. It works under the hood but retrieving data, translating data, storing data, and sending data back out to the client. The front end relies on the database heavily if the user wants to have large amount of data stored.</p>
https://github.com/jvo978/car-repair-project-frontend
<p>This respository is the front end of this application. This is the client experience where an action by the client will target an event handler. The event will then make a ajax request to the back end of this application where it handles all the data and retrieves it for the user to see. Everything here revolves around the users view, but without the backend portion user will not be able to view the data collected or added.</p>

<h2>Deployed sites</h2>
https://jvo978.github.io/car-repair-project-frontend/
https://cars-repair-project-api.herokuapp.com/

<h2>What technologies were used:</h2>

<ul>
<li>jQuery</li>
<li>JavaScript</li>
<li>Command Terminal</li>
<li>HTML</li>
<li>SCSS</li>
<li>AJAX</li>
<li>Google</li>
<li>Stack Overflow</li>
</ul>

<h2>Development Process:</h2>
<p>I started by writing the user stories and drew out my wireframe. As a side note, my back end for this project is already finished. Therefore now I start working on connecting the front end to the back end.</p>

<p>I focused on making my forms and buttons for user authetication. I did the same with buttons for my RESTful routes that link my user and resource. (CREATE CAR, READ CAR UPDATE CAR, DESTROY CAR)
</p>

<p>I then organized the buttons and link so I can keep it a bit organize before setting up event handlers for them and making ajax request to my back end. At this point, I already tested my curl scripts for all my actions in the back end so the challenge here is displaying success/failure result for each action when completed.</p>

<p>
I made it so that when a user creates a car, it displays right away for user to see what they just created. Each car created are placed in a div that have their specific ID so then I can target them after for update/delete event. When user creates the cars, each div made or car made are given a update/delete button.
</p>

<p>Once I got that going, I started cleaning up my html/scss for the page and added a nav bar so user can direct themselves to their car list, add car, change password, sign out. The home screen is mainly focused for signing in so I did not make a sign in link on the nav bar for it.</p>

<h2>Future Iteration/ fixed problems</h2>
<ul>
<li>Add modal for sign in/ sign up</li>
<li>Cleaner html/scss</li>
<li>Use handlbar instead of for loop</li>
<li>Debug more often to understand error better</li>
<li>Add more columns to my table/ create a many to many relationship</li>
<li>Create functions and conditions rather than hide/show</li>
<li>While updating car, and leaving in the middle of it to do another event. That prevent it from getting to the ui success or failure which caused unsuccessful bug. I had to make it so that the user had to finish updating the form or if they choose to do another action it cleared the updated form or moved to another page for the event user went to.</li>
</ul>
