
export interface AddCategoryProps{
    onNewCategory: (arg1: string) => void
}

export interface GifGridProps{
    category: string,
}

export interface GifItemProps{
    title: string,
    url: string
}