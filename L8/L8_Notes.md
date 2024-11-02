# Lesson 08 --

`Date: 02 NOV 2024, SAT`  
`Status: WIP, 02 NOV 2024`

### [Summary]

_(To summarise at the end of the lesson)_  
Some learning points:

1. LP 1
2. LP 2

### [Useful Links]

1. [API for pokemon](https://pokeapi.co)
2. [RAPID API](https://rapidapi.com/hub)
3. [Azure Cognitive API](https://learn.microsoft.com/en-us/samples/azure-samples/cognitive-services-rest-api-samples/cognitive-services-rest-api-samples/)
4. [JSON path finder](https://jsonpathfinder.com)
5. [Axios](https://axios-http.com)
6. [Chart.js](https://www.chartjs.org/)

## Today's Agenda

1. Recap -- Key parts to js
2. APIs
3. Assignment Brief
4. Today's assignment
5. Calling API
6. Revision (After Class)

## 01 -- RECAP

- How to declare
- Associative array vs literal objects

**WHILE LOOPS:**  
The following code can be used for the following scenarios:

1. While we are validating something
2. While we are waiting for something to happen

```javascript
while (true) {
  //characteristic, is that it does not have a break condition.
}
```

**DO-WHILE LOOPS:**

```javascript
//do something dd
```

## 02 -- APIS

- **API**: Application Programming Interface  
  &ensp;&ensp;- pokemons api  
  &ensp;&ensp;- can be used to scrap data  
  &ensp;&ensp;- can be done through Rapid  
  &ensp;&ensp;- we are learning RESTful api  
  &ensp;&ensp;- Some apis are free, while some are not  
  &ensp;&ensp;- Google maps used to be free  
  &ensp;&ensp;- [!!] Go research popular free and paid apis  
  &ensp;&ensp;- (E.g) Tik Tok's revenue source -- Is also them selling their technology
  &ensp;&ensp;- Pokemon APIs are popular because it is a complete API  
  &ensp;&ensp;- Rapid APIs is like a middleman

- **API platforms**  
  &ensp;&ensp; 1. [httpie](https://httpie.io/)  
  &ensp;&ensp; 2. [ThunderCloud](https://www.thunderclient.com/)  
  &ensp;&ensp; 3. [Postman](https://www.postman.com/)

- **API commands**  
  &ensp;&ensp;- GET  
  &ensp;&ensp;- POST  
  &ensp;&ensp;- +++  
  &ensp;&ensp;-

- **API call methods**  
  &ensp;&ensp;- Fetch  
  &ensp;&ensp;- Axios (js library), similar to Fetch mechanism  
  &ensp;&ensp;&ensp;&ensp;- Promise based HTTP client  
  &ensp;&ensp;&ensp;&ensp;- (??) What is the concept behind using Postman for testing? What are we testing here?
  &ensp;&ensp;- (??) Query

## 03 -- Assignment Brief

**Ideas**

1. Travel planners
2. pull animes and reviews
3. Daily updates on celeb news
4. get save and get nice posts from instagram
5. api to pull data from insta, categorise and create concise and organised info

**Objectives**:

- To deploy to gitHub
- Create a readME
- Create a frontEnd
- DON'T BE LATE
- Now we are just consuming APIS, not creating APIs
- Take sometime to explore all the available APIs

**Tips**

- Rmb to do wire-framing

## 04 -- Today's assignment

1. Use data gov for a free api?
2. Construct and print to your browser some of the API responses

**Steps**  
&ensp;&ensp;1. Write HTML [✔️]  
&ensp;&ensp;2. Figure out how to link api response into HTML? []  
&ensp;&ensp;3. Find a HTML to include []

**Idea**  
&ensp;&ensp;1. Get and return a post from nat geo's instagram page??  
&ensp;&ensp;2. Get and return stats from neaGov website  
&ensp;&ensp;3. 4D website
&ensp;&ensp;4. Stocks + Charts

## 05 -- Calling Api

- **Steps to implement API**

1. test api (to test in axios format)
2. create script
3. create async function to throw script from 2 in
4. (??) how to open html in web browser?
5.

## 06 -- Revision (After Class)

**1. Axios -- What is it?**

- A javaScript library
- Handles HTTP requests

**2. Js Objects -- Deconstructing it**

- (e.g.) In the context of Axios, 'Response' object can be declared and initialised in 2 methods:
- **[METHOD #1]** - `response` receives and stores the WHOLE response object

```javascript
const response = await axios.request(options);
```

- **[METHOD #2]** - `response` is deconstructed, and `{data}`extracts only the `data` section of the `response` object returned

```javascript
const { data } = await axios.request(options);
```

**3. Axios -- 'Response' Object**

- A `response` object provides detailed information about the HTTP response received from a server.
- When you make a request, Axios returns a `response` object that includes key data related to the response.
- **Summary:** The Axios `response` object is rich in information, providing both the data and context for the response, making it easier to handle API responses in a structured way.

**4. Axios -- Methods to access the 'Response' object**

- Key properties to use in an Axios request to inspect different parts of the response objects:  
  _(^^From chatGPT)_

```javascript
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log("Data:", response.data); // Actual data from the server
    console.log("Status:", response.status); // HTTP status code
    console.log("Status Text:", response.statusText); // HTTP status message
    console.log("Headers:", response.headers); // Response headers
    console.log("Config:", response.config); // Request configuration
    console.log("Request:", response.request); // Underlying request object
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## ww -- Today's task list

1. Re-organise learning materials && tutorials (30 mins)
2. Revise on implementing JS in HTML (buttons and implementing js script) (code)

## xx -- Interesting ways to implement code

> Code 1

```
For multiline code highlighting, keep it sandwiched between 2 3xbackticks
```

> Code 2

```
Well this has been interesting
```

> Code 3

```
Hope I take better notes with this in the future :3
```

yy -- Markdown Reference

---

[Markdown Cheat Sheet] (https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet)
