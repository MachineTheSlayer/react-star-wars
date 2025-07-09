/**Add commentMore actions
 * Отправляет запрос Fetch
 * @param {String} url - url для запросаAdd commentMore actions
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }

    /* fetch(url) 
        .then(res => res.json())
        .then(body => console.log(body))
        .catch(error => console.log(error.message)) fetch через Promise */ 
}


/* (async () => {
    const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
    console.log(body);
})(); */

export const makeConcurrentRequest = async (urls) => {
    try {
    const res = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return res;
  } catch (error) {
    console.error("Could not fetch concurrent requests.", error.message);
    return false;
  }
};