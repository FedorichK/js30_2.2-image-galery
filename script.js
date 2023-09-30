
// Функция для получения фотографий
async function getPhotos(query) {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: query,
                per_page: 10
            },
            headers: {
                Authorization: 'Client-ID xsW20ax5ZKdLXKpRtGtru3fFcDOA-llQF6QeadWA1MI' // Замените YOUR_ACCESS_KEY на ваш ключ доступа Unsplash API
            }
        });

        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

// Функция для отображения фотографий
function displayPhotos(photos) {
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        document.querySelector('#photo-gallery').appendChild(img);;
    });
}

// Функция для обработки поискового запроса
function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;
    getPhotos(query).then(displayPhotos);
}

// Добавление обработчика событий к форме поиска
document.querySelector('#search-form').addEventListener('submit', handleSearch);
