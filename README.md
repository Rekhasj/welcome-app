In this project, let's build a **ReactJS chat application** by applying the concepts of ReactJS.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/welcome-app-output-v2.gif" alt="welcome app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/welcome-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/welcome-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

This will be a single page application, which will have a textbox to type the message and a button to send the chat.

On clicking send button, show the chat message above the textbox(Refer the image). You need not have to develop the sidebar in the image. Just focus on the chat input box and the chat message thread.

For each message randomly assign a username from the below user list.

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
For each message, add a like button at the right end of the chat message, which on click should increase the count. Display the count next to the like button.
