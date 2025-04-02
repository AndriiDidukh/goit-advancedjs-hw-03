const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=49634928-8ee73fd5b07957627ef2b531c';

export function fetchFotoCard(query) {
  const searchParams = new URLSearchParams({
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${API_KEY}&${searchParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}