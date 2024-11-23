document.addEventListener("DOMContentLoaded", () => {
    const cardForm = document.getElementById("cardForm");
    const cardContainer = document.getElementById("cardContainer");

    // Load existing cards from local storage when the page loads
    loadCardsFromLocalStorage();

    // Handle form submission to create a new card
    cardForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get user inputs
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const imageUrl = document.getElementById("imageUrl").value;

        // Create a new card object
        const newCard = { title, description, imageUrl };

        // Add the new card to local storage
        saveCardToLocalStorage(newCard);

        // Create and display the card
        createCardElement(newCard);

        // Clear the form
        cardForm.reset();
    });

    // Function to create a card element in the DOM
    function createCardElement(cardData) {
        const { title, description, imageUrl } = cardData;

        const card = document.createElement("div");
        card.classList.add("card");

        // Add card content
        card.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="Card Image">` : ""}
            <div class="card-body">
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Add delete functionality to the delete button
        card.querySelector(".delete-btn").addEventListener("click", () => {
            card.remove();
            deleteCardFromLocalStorage(cardData);
        });

        // Append the card to the card container
        cardContainer.appendChild(card);
    }

    // Function to save a card to local storage
    function saveCardToLocalStorage(card) {
        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.push(card);
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    // Function to load cards from local storage and display them
    function loadCardsFromLocalStorage() {
        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.forEach(createCardElement);
    }

    // Function to delete a card from local storage
    function deleteCardFromLocalStorage(cardToDelete) {
        const cards = JSON.parse(localStorage.getItem("cards")) || [];
        const updatedCards = cards.filter(
            (card) =>
                card.title !== cardToDelete.title ||
                card.description !== cardToDelete.description ||
                card.imageUrl !== cardToDelete.imageUrl
        );
        localStorage.setItem("cards", JSON.stringify(updatedCards));
    }
});
