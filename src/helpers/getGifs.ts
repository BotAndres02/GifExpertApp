


interface GiphyImageData {
    id: string;
    title: string;
    images: {
        downsized_medium: {
            url: string;
        };
    };
}

export const getGifs = async( category: string ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=IFz5qZkysYiZgNSFkwm7x3FeGZzB01es&q=${category}&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( img: GiphyImageData ) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;   
}