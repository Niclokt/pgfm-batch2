document.addEventListener('DOMContentLoaded', () => {
    const cardForm = document.getElementById('cardForm');
    const cardContainer = document.getElementById('cardContainer');

    // Handle form submission
    cardForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get user inputs
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageUrl').value;

        // Create card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Add card content
        card.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="Card Image">` : ''}
            <div class="card-body">
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Add delete functionality
        card.querySelector('.delete-btn').addEventListener('click', () => {
            card.remove();
        });

        // Append card to container
        cardContainer.appendChild(card);

        // Clear the form
        cardForm.reset();
    });
});
