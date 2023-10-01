// Get photos
async function getPhotos(query) {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: query,
                per_page: 6
            },
            headers: {
                Authorization: 'Client-ID xsW20ax5ZKdLXKpRtGtru3fFcDOA-llQF6QeadWA1MI' // My Unsplash API key
            }
        });

        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

// Display photos
function displayPhotos(photos) {
    // Clear the gallery
    const gallery = document.querySelector('#photo-gallery');
    gallery.innerHTML = '';

    // Display new photos
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        gallery.appendChild(img);
    });
}

// Search
function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;
    getPhotos(query).then(displayPhotos);
}

// Adding an event handler to the search form
document.querySelector('#search-form').addEventListener('submit', handleSearch);

// Load initial photos
getPhotos('snow').then(displayPhotos);

// Focus on the search input field
document.querySelector('#search').focus();
