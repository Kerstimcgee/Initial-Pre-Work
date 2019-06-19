# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

put your answer here

When we hit “go” on the address, we send a network request from client side to the server for the actual, IP address associated with our easy-to-remember url name.  If this is successful, we get a viewable copy in our browser of the website. This info is sent in chunks at a time, which are called “packets,” to our machine to reduce load time.

## From start to finish, how does data reach you to be rendered in the browser?

put your answer here

Data over the websites is sent via the network from other locations it is being stored, to your web browser. Requests to the network allows us to retrieve from databases that stored on other machines/or a data cloud via an API. We can get this via GET and POST requests to receive up to the moment information, in some cases, all within our browser, using json.

## What code is rendered in the browser?

put your answer here

In the browser, the code that gets rendered are what is on the DOM and the CCSOM. It then can read the .html, .css, and .js, (these file types are included in your DOM within your project folder.) Without bugs in the code, it can render these files to the browser.

## What is the server-side code’s main function?

put your answer here

The server side code's main function is to allow programs to run from their originating server. The server gets request messages from a client
in order to deliver back a complete response with the answer to the client-side request. It replies to the client side producing a success status 200 and sending HTTP back to the client, so it controls what is getting sent TO the client. Some server side languages include Python, PHP, C#, NodeJS, and Ruby. If data is stored on a server, it can add efficiency by lessening runtime and overall create a better client-side experience.

## What is the client-side code’s main function?

put your answer here

The client-side functions to make HTTP requests to server-side for information and it reads HTTP responses sent back from the server. It has less accessibility to the files of an original operating system and runs on a server. Tasks that can be accomplished client side usually take less bandwidth and are more efficient to execute in big O notation.

## What is runtime?

put your answer here

Runtime is when a program is actively working through its logic, solving the steps in an object. Runtime happens within a program's memory and before something in the logic allows the tasks to terminate.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

put your answer here

If I understand correctly, the client-side assets are created in one instance onto the receiving computer, where they then can continue to make requests back to the server-side.


## How many instances of the server-side code are available at any given time?

Instances of server-side code available for use could depend on memory available. More memory would allow for more clients to request to connect at any given time, until a termination due to lack of server side bandwidth.


## How many instances of the databases connected to the server application are created?

put your answer here

This could depend on how many programs were running from the database.

--More broadly, the instances of assets created for clientS would depend on the amount of devices connected to the server running the program from the server. I am not certain I understand the question correctly, but these answers could be variable on big O parameters.
