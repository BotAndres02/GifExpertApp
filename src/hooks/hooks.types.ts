interface GifImage {
    id: string, 
    title: string,
    url: string,
}


export interface FetchResult { 
    images: GifImage[],
    isLoading: boolean,
}