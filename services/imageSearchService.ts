// A new service to handle fetching images from a free, public API.

export async function searchImageForPlace(query: string): Promise<string | null> {
  if (!query) return null;

  try {
    // Step 1: Search for an image file title on Wikimedia Commons.
    // This API is free and doesn't require a key.
    const searchUrl = new URL('https://commons.wikimedia.org/w/api.php');
    const searchParams = {
      action: 'query',
      list: 'search',
      // Add context to the search query for better results
      srsearch: `${query} Colombia`,
      srnamespace: '6', // Search within the "File" namespace
      srlimit: '1',     // We only need the top result
      format: 'json',
      origin: '*',    // Required for CORS
    };
    Object.keys(searchParams).forEach(key => searchUrl.searchParams.append(key, searchParams[key]));
    
    const searchResponse = await fetch(searchUrl.toString());
    if (!searchResponse.ok) {
        throw new Error(`Wikimedia search request failed with status ${searchResponse.status}`);
    }
    const searchData = await searchResponse.json();

    const firstResult = searchData.query?.search?.[0];
    if (!firstResult) {
      console.warn(`No Wikimedia image found for query: ${query}`);
      return null;
    }
    const fileTitle = firstResult.title;

    // Step 2: Use the file title to get the actual image URL.
    const imageUrlApi = new URL('https://commons.wikimedia.org/w/api.php');
    const imageParams = {
        action: 'query',
        titles: fileTitle,
        prop: 'imageinfo', // We want information about the image
        iiprop: 'url',      // Specifically, the URL
        iiurlwidth: '800',  // Request a reasonably sized image for performance
        format: 'json',
        origin: '*',
    };
    Object.keys(imageParams).forEach(key => imageUrlApi.searchParams.append(key, imageParams[key]));

    const imageResponse = await fetch(imageUrlApi.toString());
     if (!imageResponse.ok) {
        throw new Error(`Wikimedia image URL request failed with status ${imageResponse.status}`);
    }
    const imageData = await imageResponse.json();

    const pages = imageData.query?.pages;
    if (!pages) return null;
    
    // The page data is keyed by a dynamic page ID, so we get the first key.
    const pageKey = Object.keys(pages)[0];
    const finalUrl = pages[pageKey]?.imageinfo?.[0]?.thumburl;
    
    return finalUrl || null;

  } catch (error) {
    console.error("Error fetching image from Wikimedia Commons:", error);
    return null;
  }
}
