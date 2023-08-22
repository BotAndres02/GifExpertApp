interface GifImage {
    id: string; 
}


export interface FetchResult { 
    images: GifImage[],
    isLoading: boolean,
}