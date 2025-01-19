document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const blogPosts = document.querySelectorAll('.blog .box');
    const noResultsMessage = document.getElementById('no-results');

    searchBox.addEventListener('input', () => {
        const searchValue = searchBox.value.toLowerCase().trim();
        let foundAny = false;

        blogPosts.forEach((post) => {
            const postTitle = post.querySelector('h3').textContent.toLowerCase();
            const postDescription = post.querySelector('p').textContent.toLowerCase();

            if (postTitle.includes(searchValue) || postDescription.includes(searchValue)) {
                post.style.display = 'block'; // Show matching posts
                foundAny = true;
            } else {
                post.style.display = 'none'; // Hide non-matching posts
            }
        });

        // Show or hide "Item is not found" message
        if (foundAny) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });
});
