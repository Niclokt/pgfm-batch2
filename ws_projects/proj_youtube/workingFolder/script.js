//Add event listener to button
//Get info
//Parse info into APIs
//Store data into local storage: 1. Thumbnail, 2. Title, 3. Summary, 4. Description, 5. DateCreated

//Add event listener
document.addEventListener("DOMContentLoaded", () => {
    const cardForm = document.getElementById("cardForm");
    const cardContainer = document.getElementById("cardContainer");

    //Handle form submission to create new card
    cardForm.addEventListener("submit", (event) => {
        //Step 0: Store user input:
        const youtube_url = document.getElementById("youtube_url").value;
        const video_desc = document.getElementById("videoDescription").value;

        //Step 1:  From user input url, get video id
        const video_id = getVideoId(youtube_url);

        //Step 1: Get Video Summary --> Store in video_summary
        const video_summary = printGroqResponse(youtube_url);

        //Step 2: Get Video Details --> Store in 'video_thumbnail' and 'video_title'
        const video_details = getVideoDetails(video_id);

        const video_title = video_details.video_title;
        const video_thumbnail = video_details.video_thumbnail;

        //Get Date: YYYY MMM DD, HH:MM
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Get the month (0-11, so add 1 for 1-12)
        const date = now.getDate(); // Get the day of the month (1-31)
        const hours = now.getHours(); // Get the hour (0-23)
        const minutes = now.getMinutes(); // Get the minutes (0-59)

        //Card Details: Get user inputs & video info & date created
        //const youtube_url = document.getElementById('youtube_url').value;
        //const video_desc = document.getElementById('videoDescription').value;
        const dateCreated = `${year}-${month}-${date}, ${hours}:${minutes}`;

        //Create Card obj
        const newCard = {
            youtube_url,
            video_desc,
            video_id,
            video_summary,
            video_title,
            video_thumbnail,
        };

        //Add new card to the local storage:
        saveCardToLocalStorage(newCard);

        //Create and display card
        createCardElement(newCard);

        //Clear the form
        cardForm.reset();
    });
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
            //'x-rapidapi-key': '609e2558d1msh6b1c444f29b8f22p1360fejsn858e524c731d',
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
            //'x-rapidapi-key': '6fe1e10d0cmsh613dcf445482ba5p1ff21djsn8eda3b7270b3',
            "x-rapidapi-host": "youtube-transcript3.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        let yt_transcript = response.data.transcript;
        console.log(yt_transcript);

        //show transcript on webpage:
        document.getElementById("youtube_transcript").innerHTML = yt_transcript;

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
                content: `Summarise the following text in no more than 300 words in point form: ${yt_transcript} 
                    Do not make things up. Respond in html-friendly text.`,
            },
        ],
    };

    const apiKey = "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";
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
        const chatCompletion = await getGroqChatCompletion(returnedTranscript);

        // Print the completion returned by the LLM.
        const groqResponse = chatCompletion.data.choices[0]?.message?.content;
        console.log(groqResponse || "");

        // Return value of markedGroqResponse:
        const markedGroqResponse = marked.parse(groqResponse);
        return markedGroqResponse;

        // Display summary on webpage. parse markeddown response into "marked" library
        document.getElementById("summarised_text").innerHTML =
            markedGroqResponse;

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

// FN 6: Create Card Element
function createCardElement(card) {}

// FN 7: Save Card to Local Storage
function saveCardToLocalStorage(card) {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));
}

// FN 8: Load Card from local storage

//Call Async functions
getVideoDetails();
printGroqResponse();
