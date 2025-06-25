
export interface Product {
    id: number;
    name:string;
    imgLink: string;
    currentPrice: number;
    originalPrice?: number;
    discount?: number;
    ratings: string[];
    ratingNumber: string;
    colors?: string[];
    isFavorite: boolean;
    isAddToCard: boolean; 
    isNew?: boolean;
}