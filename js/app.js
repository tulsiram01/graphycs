
document.querySelectorAll('.img').forEach(image => {
    image.addEventListener('click', (e) => {
        const preview = document.getElementById('imagePreview');
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.src;
        preview.classList.add('active');
    });
});

document.getElementById('closeButton').addEventListener('click', () => {
    const preview = document.getElementById('imagePreview');
    preview.classList.remove('active');
}); 


//search engine

// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const cards = document.querySelectorAll('.invitation-box');
    const noResultsMessage = document.getElementById('no-results');

    searchBox.addEventListener('input', () => {
        const searchValue = searchBox.value.toLowerCase().trim();
        let hasResults = false;

        cards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchValue)) {
                card.style.display = 'block'; // Show matching cards
                hasResults = true;
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });

        // Show or hide "Item not found" message
        if (hasResults) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });
});
