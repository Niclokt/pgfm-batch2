import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function printGroqResponse() {
  try {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
  } catch (error) {
    console.error("Error during chat completion:", error);
  }
}

export async function getGroqChatCompletion() {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "summarise the 3 laws of motion in no more than 3 sentences.",
        },
      ],
      model: "llama3-8b-8192",
    });
    return response;
  } catch (error) {
    console.error("Error calling groq.chat.completions.create:", error);
    throw error; // Re-throw the error to be caught by the main function
  }
}

printGroqResponse();