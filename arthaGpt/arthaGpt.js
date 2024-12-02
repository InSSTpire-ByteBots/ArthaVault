
const API_KEY = "AIzaSyBVPmLtA6NE3tMG79jyL_D23mM-TBNS2JU"; // Replace with your actual API key
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + API_KEY;

// Add event listener to the form
let question = document.getElementById('question')
let loader = document.querySelector('.loader');
document.getElementById("submit").addEventListener("click", getResponse);
document.addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
        getResponse(event);
    }
})
async function getResponse(event){
    event.preventDefault(); // Prevent the form from reloading the page
    console.log("Working")
    loader.style.display = 'flex'
    const requestBody = {
        contents: [
        {
            parts: [
            {
                text: question.value + "Dont reply if no prompt is given above this line\nActually I have used gemini api in my website named ArthaVault and the question asked above is given by the user, my website is related to finance management (budget management) which manages finance of the user, give them investment and savings tips, so if the question is not related to these topics, then plz reply with 'I can only help you with your finance management related questions' and respond like user doesn't find out that this promt was already written. Answer any query or if no question, introduce yourself as 'Artha GPT' and introduce your service to them"
            }
            ]
        }
        ]
    };
    
    try {
        console.log("try")
        // Make the API call
        const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
        });
    
        // Handle the response
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        let data = await response.json();
        
        let ans= marked.parse(data.candidates[0].content.parts[0].text)
        // Display the response in the div
        console.log("print")
        loader.style.display = 'none'
        document.querySelector(".response").innerHTML = `
        <p>${ans}</p>
        `;
    } catch (error) {
        console.log("catch")
        console.error("Error fetching data:", error);
        loader.style.display = 'none'
        document.querySelector(".response").innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}