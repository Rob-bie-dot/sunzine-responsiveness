const url = 'https://api.unsplash.com/search/photos'

async function fetchUrl(query) {
  const params = new URLSearchParams({
    page: '1',
    per_page: '100',
    query,
  })

  const response = await fetch(`${url}?${params.toString()}`, {
    headers: {
      Authorization: 'Client-ID Vw3bUw5-FZdsafSE2MQEdJAn8PFhlE4dVs6EECJmouo',
    },
  })

  const data = await response.json()

  console.table(data)

  document.getElementById('album').replaceChildren()

  for (const album of data.results) {
    const albumDiv = document.createElement('div')

    const albumImage = document.createElement('img')
    // console.log('image', album.url, album.download_url)
    albumImage.setAttribute('src', album.links.download)
    albumImage.setAttribute('alt', album.alt_description)
    albumImage.classList.add('album-img')
    albumDiv.appendChild(albumImage)

    const albumAuthor = document.createElement('h1')
    albumAuthor.textContent = album.user.name
    albumDiv.appendChild(albumAuthor)

    document.querySelector('#album').appendChild(albumDiv)
  }
}
fetchUrl()

//    event listener for the search button
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault()
  const searchQuery = document.getElementById('search-input').value.trim()

  if (searchQuery === '') {
    alert('Type your keyword here')
    return
  }
  // Fetch image
  fetchUrl(searchQuery)
})

// Select form by id
// const registerForm = document.querySelector('#register-form');
// console.log(searchBar);
// Handle form submit event]
// registerForm.addEventListener('search', function () {
// Collect username
// Collect email
// Collect password
// Save user information
// Send confirmation email
// });
