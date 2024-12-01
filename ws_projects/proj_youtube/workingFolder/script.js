//Add event listener to button
//Get info
//Parse info into APIs
//Store data into local storage: 1. Thumbnail, 2. Title, 3. Summary, 4. Description, 5. DateCreated

//Add event listener
document.addEventListener("DOMContentLoaded", () => {
    const cardForm = document.getElementById("cardForm");
    const cardContainer = document.getElementById("cardContainer");

    //CALL LOCAL STORAGE: Load existing cards from local storage
    const cardsList = loadCardsFromLocalStorage();

    ///////// LOAD EVENT LISTENERS /////////
    //EVENT LISTENER #1 -- Create Card
    //Handle form submission to create new card
    cardForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        //Card Details: [Step 0] Store user input:
        const youtube_url = document.getElementById("youtube_url").value;
        const video_desc = document.getElementById("videoDescription").value;
        console.log(`Create Card - stored user input`);
        //Card Details: [Step 0] Get current timestamp for card id
        const timestamp = Date.now();
        console.log(timestamp);

        const card_id = timestamp;

        console.log(`Input Youtube URL: ${youtube_url}`);
        console.log(`Input Desc: ${video_desc}`);

        //Card Details: [Step 1] From user input url, get video id
        const video_id = getVideoId(youtube_url);
        console.log("Update -- Got Video Id");

        //Card Details: [Step 1] Get Video Summary --> Store video_summary
        const video_summary = await printGroqResponse(youtube_url);
        console.log("Update -- Got Summary");

        //Card Details: [Step 2] Get Video Details --> Store in 'video_thumbnail' and 'video_title'
        const video_details = await getVideoDetails(video_id);
        console.log("Update -- Got Video Details");

        const video_title = video_details.video_title;
        const video_thumbnail = video_details.video_thumbnail;

        //Get Date: YYYY MMM DD, HH:MM
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Get the month (0-11, so add 1 for 1-12)
        const date = now.getDate(); // Get the day of the month (1-31)
        const hours = now.getHours(); // Get the hour (0-23)
        const minutes = now.getMinutes(); // Get the minutes (0-59)

        //Card Details: Get Date Created
        const dateCreated = `${year}-${month}-${date}, ${hours}:${minutes}`;
        console.log("Update -- Got Date");

        //Create Card obj
        //to implement id
        const newCard = {
            card_id,
            youtube_url,
            video_desc,
            video_id,
            video_summary,
            video_title,
            video_thumbnail,
            dateCreated,
        };

        //Add new card to the local storage:
        saveCardToLocalStorage(newCard);
        console.log("Update -- Saved card to Local Storage");

        //Create and display card
        createCardElement(newCard);
        console.log("Update -- Created card");

        //Clear the form
        cardForm.reset();
        console.log("Update -- Card form resetted");
    });

    //Add event listener to button

    /////// FUNCTION DECLARATIONS ///////
    //FN 1: Add Async function to fetch video details
    async function getVideoDetails(video_id) {
        const options = {
            method: "GET",
            url: "https://yt-api.p.rapidapi.com/video/info",
            params: { id: video_id },
            headers: {
                "x-rapidapi-key":
                    "609e2558d1msh6b1c444f29b8f22p1360fejsn858e524c731d",
                "x-rapidapi-host": "yt-api.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);

            const video_title = response.data.title;
            const video_thumbnail = response.data.thumbnail[3].url;

            const details = { video_title, video_thumbnail };

            console.log(`Video Title: ${details.video_title}`);
            console.log(`Thumbnail URL: ${details.video_thumbnail}`);

            return details;
        } catch (error) {
            console.error(error);
        }
    }

    //FN 2: Add Async function to fetch transcript
    async function fetchTranscript(input_url) {
        const options = {
            method: "GET",
            url: "https://youtube-transcript3.p.rapidapi.com/api/transcript-with-url",
            params: {
                url: input_url,
                flat_text: "true",
                lang: "en",
            },
            headers: {
                "x-rapidapi-key":
                    "6fe1e10d0cmsh613dcf445482ba5p1ff21djsn8eda3b7270b3",
                "x-rapidapi-host": "youtube-transcript3.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            console.log(`Response Data in Fetch Transcript: ${response.data}`);

            let yt_transcript = response.data.transcript;
            console.log(
                `Transcript Data in Fetch Transcript: ${yt_transcript}`
            );

            //show transcript on webpage:
            document.getElementById("youtube_transcript").innerHTML =
                yt_transcript;

            //Get data type of yt_transcript
            console.log(`Transcript datatype: ${typeof yt_transcript}`);
            //return transcript to parse into LLM Groq
            return yt_transcript;
        } catch (error) {
            console.error(error);
        }
    }

    //FN 3: Initiate Groq Chat function
    async function getGroqChatCompletion(yt_transcript) {
        const url = "https://api.groq.com/openai/v1/chat/completions";

        const data = {
            model: "llama3-8b-8192",
            messages: [
                {
                    role: "user",
                    content: `Summarise the following text in no more than 400 words in point form: ${yt_transcript} 
                    Do not make things up. Prioritise consolidating the text by insights to the arguments presented in the text. Respond in html-friendly text or markdown.`,
                },
            ],
        };

        const apiKey =
            "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";
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        };

        try {
            console.log(`transcript: ${data.messages[0].content}`);
            const response = await axios.post(url, data, { headers });
            console.log("Response:", response);

            return response;
        } catch (error) {
            console.error(
                "Error:",
                error.response ? error.response.data : error.message
            );
        }
    }

    //FN 4: Declare groq main function
    async function printGroqResponse(input_url) {
        try {
            //Get Transcript from Step 1:
            const returnedTranscript = await fetchTranscript(input_url);
            console.log(`ReturnedTranscript: ${returnedTranscript}`);

            //Parse transcript into Groq chat function:
            const chatCompletion = await getGroqChatCompletion(
                returnedTranscript
            );

            // Print the completion returned by the LLM.
            const groqResponse =
                chatCompletion.data.choices[0]?.message?.content;
            console.log(groqResponse || "");

            // Save value of markedGroqResponse:
            const markedGroqResponse = marked.parse(groqResponse);

            // Display summary on webpage. parse markeddown response into "marked" library
            document.getElementById("summarised_text").innerHTML =
                markedGroqResponse;

            // Return value of markedGroqResponse:
            return markedGroqResponse;

            //console.log(chatCompletion.choices[0]?.message?.content || "");
        } catch (error) {
            console.error("Error during chat completion:", error);
        }
    }

    // FN 5: Get video Id
    function getVideoId(input_url) {
        const url = input_url;
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v");

        console.log(videoId); // Output: "td4cpnZO6oY"
        return videoId;
    }

    //FN x: Wrap Event Listener in a Function
    //function addCardEventListeners(card, cardData) {
    function addCardEventListeners() {
        //Get Card Container from DOM
        const cardContainer = document.getElementById("cardContainer");

        //Consolidating containers with the "edit"/"delete" classes
        const editButtons = cardContainer.querySelectorAll(".edit-btn");
        const saveButtons = cardContainer.querySelectorAll(".save-btn");
        const deleteButtons = cardContainer.querySelectorAll(".delete-btn");

        //Attach Event Listeners to all edit buttons
        editButtons.forEach((editButton) => {
            editButton.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                //Get Card ID of clickeed Button
                const cardToEditID = event.target.dataset.id;
                console.log(`FN X - cardToEditID: ${cardToEditID}`);
                //Call Edit Card Function (To get card and data by Id)
                //editCardFromLocalStorage(cardData, card);
                editCardFromLocalStorage(cardToEditID);
            });
        });

        //Attach Event Listeners to all save buttons
        saveButtons.forEach((saveButton) => {
            saveButton.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                //Get Card ID of clickeed Button
                const cardToSaveID = event.target.dataset.id;
                console.log(`FN X - cardToEditID: ${cardToSaveID}`);
                //Call Edit Card Function (To get card and data by Id)
                //saveCard(cardDataToSave, cardElementToSave, updatedDescription);
                saveEditedCardToLocalStorage(cardToSaveID);
            });
        });

        //Attach Event Listeners to all delete buttons
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener("click", (event) => {
                event.preventDefault();
                //Get Card ID of clicked Button
                const cardToDeleteID = event.target.dataset.id;
                console.log(`FN X - cardToDeleteID: ${cardToDeleteID}`);
                //Remove card from HTML DOM
                card.remove();
                //Call delete card function
                //deleteCardFromLocalStorage(cardData);
                deleteCardFromLocalStorage(cardToDeleteID);
            });
        });
    }

    //FN xx
    function removeEventListeners() {
        //Get Card Container from DOM
        const cardContainer = document.getElementById("cardContainer");

        //Consolidating containers with the "edit"/"delete" classes
        const editButtons = cardContainer.querySelectorAll(".edit-btn");
        const saveButtons = cardContainer.querySelectorAll(".save-btn");
        const deleteButtons = cardContainer.querySelectorAll(".delete-btn");

        editButtons.forEach((editButton) => {
            editButton.removeEventListener("click", editCardHandler);
        });
        saveButtons.forEach((saveButton) => {
            saveButton.removeEventListener("click", saveCardHandler);
        });
        deleteButtons.forEach((deleteButton) => {
            deleteButton.removeEventListener("click", deleteCardHandler);
        });
    }

    // FN 6: Save Card to Local Storage, into "videoCards" obj
    function saveCardToLocalStorage(card) {
        const videoCards = JSON.parse(localStorage.getItem("videoCards")) || [];
        videoCards.push(card);
        localStorage.setItem("videoCards", JSON.stringify(videoCards));
    }

    // FN 7: Create and Load Card from local storage
    function createCardElement(cardData) {
        //Instantiate Variable
        const {
            card_id,
            youtube_url,
            video_desc,
            video_id,
            video_summary,
            video_title,
            video_thumbnail,
            dateCreated,
        } = cardData;

        //Create card element in HTML DOM
        const card = document.createElement("div"); // Variable declaration
        card.classList.add("col"); // Add class for styling (Bootstrap)

        //console.log(`FN #7 - card: ${JSON.stringify(card)}`);

        //Add card content
        card.innerHTML = `
        <div class="card" id="${card_id}">
            <div class="card h-100">
                ${
                    video_thumbnail
                        ? `<img src ="${video_thumbnail}" alt="Card Image">`
                        : ""
                }
	        	<div class="card-body">
	        		<a href=${youtube_url}>
	        			<h3>${video_title}</h3>
	        		</a>

                    <h4><u>Video Summary: </u></h4>
	        		<p>${video_summary}</p> <br>    
	        		<h4>Notes: </h4>
	        		<p class="card-body-notes">${video_desc}</p>
	        		<button class="edit-btn" data-id="${card_id}">Edit Notes</button>
	        		<button class="delete-btn" data-id="${card_id}">Delete</button>
	        	</div>
	        	<div class="card-footer">
	        		<small class="text-body-secondary">Last updated 3 mins ago</small>
	        	</div>
	        </div>
        </div>
    `;
        addCardEventListeners();
        removeEventListeners();

        cardContainer.appendChild(card);
    }

    //FN 8: Load card from Local Storage
    function loadCardsFromLocalStorage() {
        const cards = JSON.parse(localStorage.getItem("videoCards")) || [];
        cards.forEach(createCardElement);
        return cards;
    }

    //FN 9: Include function to edit card from local storage
    //function editCardFromLocalStorage(cardDataToEdit, cardElement) {
    function editCardFromLocalStorage(cardToEditID) {
        console.log(`cardToEditID: ${cardToEditID}`);
        //Get cardToEdit Element by ID
        const cardElement = document.getElementById(`${cardToEditID}`);
        console.log(`FN 9 - cardElement: ${cardElement}`);

        //Select nested elements to edit
        const descriptionElement =
            cardElement.querySelector(".card-body-notes");
        console.log(
            `FN 9 - descriptionElement: ${JSON.stringify(descriptionElement)}`
        );

        //Create input fields for editing
        const descriptionInput = document.createElement("textarea");
        descriptionInput.value = descriptionElement.innerHTML;
        console.log(
            `FN #9 - Description inner html: ${descriptionElement.innerHTML}`
        );

        //Replace Static Content w Input Fields
        descriptionElement.replaceWith(descriptionInput);
        descriptionElement.classList.add("card-body-notes");
        console.log(
            `FN #9 - Edit Card: static content has been replaced with input field`
        );

        //Change Edit button to Save button
        const editButton = cardElement.querySelector(".edit-btn");
        const newSaveButton = editButton.cloneNode(true); // Creates a new button, clearing listeners
        newSaveButton.textContent = "Save";
        newSaveButton.classList.add("save-btn");
        newSaveButton.classList.remove("edit-btn");

        //Replace editButton w newSaveButton
        editButton.replaceWith(newSaveButton);

        //Call Event Listener
        removeEventListeners();
        addCardEventListeners();
    }

    //FN 10: Function to save changes to edit
    // async function saveCard(
    //     cardDataToSave,
    //     cardElementToSave,
    //     updatedDescription
    // ) {

    async function saveEditedCardToLocalStorage(cardToSaveID) {
        // Get the updated description from the textarea
        const cardElementToSave = document.getElementById(cardToSaveID);
        const updatedDescription =
            cardElementToSave.querySelector("textarea").value;

        //input check
        console.log(`Fn #10 - cardToSaveID: ${cardToSaveID}`);

        // Update the local storage card data
        const cards = JSON.parse(localStorage.getItem("videoCards")) || [];

        // [??] How does it only identfy and updated the card we're updating with updatedDescription?
        // [Ans] Via the logic in the if function
        const updatedCards = cards.map((card) => {
            if (card.card_id === cardToSaveID) {
                return { ...card, video_desc: updatedDescription };
            }
            return card;
        });

        localStorage.setItem("videoCards", JSON.stringify(updatedCards));

        // Update the DOM
        const updatedDescriptionElement = document.createElement("p");
        updatedDescriptionElement.classList.add("card-body-notes");
        updatedDescriptionElement.innerHTML = updatedDescription;
        //input check
        console.log(
            `Fn #10 - UpdatedDescriptionElement.textContent: ${updatedDescriptionElement.textContent}`
        );

        const descriptionInput = cardElementToSave.querySelector("textarea");
        descriptionInput.replaceWith(updatedDescriptionElement);
        console.log(
            `Fn #10 - Input Field has been replaced with Static Field: ${updatedDescriptionElement.textContent}`
        );

        // Change Save button back to Edit button
        const saveButton = cardElementToSave.querySelector(".save-btn");
        const newEditButton = saveButton.cloneNode(true); // Creates a new button, clearing listeners
        newEditButton.textContent = "Edit";
        newEditButton.classList.add("edit-btn");
        newEditButton.classList.remove("save-btn");

        //Replace saveButton w New Edit button
        saveButton.replaceWith(newEditButton);

        // Reassign event listener for editing
        removeEventListeners();
        addCardEventListeners();
    }

    //FN 11: Include function to delete a card from local storage
    function deleteCardFromLocalStorage(cardToEditID) {
        //add code here
        const cards = JSON.parse(localStorage.getItem("videoCards")) || [];
        const updatedCards = cards.filter(
            // !! To edit what to filter in here!! Should eventually filter by id
            (card) => card.card_id !== cardToEditID
        );
        localStorage.setItem("videoCards", JSON.stringify(updatedCards));
    }
});
//Call Async functions
// getVideoDetails();
// printGroqResponse();
