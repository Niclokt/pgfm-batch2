# Project Youtube Euphoria

See a youtube video that might provide some interesting insights?

But no time and brain power to sit through the video and process it's contents?

That's where Youtube Euphoria comes into play!  
Get your dose of dopamin regardless of time and day!  
A click of a button, Youtube Euphoria coming your way!

#### _Steps:_

1. Simply copy the youtube url from your browser's navigation bar.
2. Paste the url of the youtube video of interest into the input box.
3. That's it! A card with a link to the video and summary of it's content will be created.

## Design Process

`Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.`

### Target Audience:

-   Anyone who watches youtube for knowledge

### Audience's pain points:

-   Have to make the effort to make notes
-   Have to sit through the entire video to get the gist of the content
-   Might have to re-watch the video a few times to digest videos with more complex content

### Project Value Proposition

-   Organises and stores summarised version of video into cards
-   Users can easily come to view the cards for a quick recap on the videos

### List of User Stories:

`This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process.
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url.`

#### [1] User Stories

> User Stories

-   As a user type, I want to perform an action, so that I can achieve a goal.

#### [2] Links to wireframe and figjam

-   [Wireframe]()
-   [Figjam]()

## Features

`In this section, you should go over the different parts of your project, and describe each in a sentence or so.`

### Existing Features

-   **URL input feature**
    -   Allows users to indicate their video of interest, by having them paste the url link into the textbox.
-   **Video Cards**
    -   Allows users to keep the information/ summary for each video modular, by encapsulating the content in a video card
-   **Collapsible Summary**
    -   Allows users to collapse the summary sections of the various video cards, such that it keeps the interface neat.
-   **Edit Notes**
    -   For users that might be using this web app for studying, it allows them to make and edit notes for reference by clicking on the `edit` button, to make edits to their notes in the textbox and clicking on `save` to save their changes.
-   **Last Updated DateTime:**
    -   Enables user to track when their last edit was made, but checking the footer of the card
-   **Delete Card**
    -   Enables users to remove the video cards, by clicking on the 'delete' button.

### Features Left to Implement

`In addition, you may also use this section to discuss plans for additional features to be implemented in the future:`

-   Draggable/ Rearrangeable cards
-   Search function
-   Filter function (E.g. By video title, date updated, duration)
-   Introduce Tabs to organise Video cards into various cateogories
-   display hashtags related to the video

## Technologies Used

`In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.`

-   [Bootstrap](https://getbootstrap.com/docs/5.3/components/collapse/)
    -   To simplify the process of beautifying frontend
-   [Marked](https://marked.js.org)
    -   to convert markdown script into HTML code
-   [Youtube Detail API]()
    -   Get info on youtube video (e.g. Video Title)
-   [Youtube Transcript API]()
    -   Get transcipt of youtube video
-   [Groq]()
    -   Get summary of video transcript using Llamma LLM model

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

###Bugs:

-   The edit button only works if you click on the edit button in the first video card. Afterwhich the edit button will work for the rest of the videos.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content

-   N.A.

### Media

-   The videos used in this site were obtained from youtube.

### Acknowledgements

-   I received inspiration for this project from myself
