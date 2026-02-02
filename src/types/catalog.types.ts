export interface IngredientDto {
    type: string;
    price: number;
    img: string;
}

export interface ToppingDto {
    type: string;
    price: number;
    img: string;
}

export interface SizeDto {
    type: string;
    price: number;
}

export interface DoughDto {
    type: string;
    price: number;
}

export interface ProductDto {
    id: string;
    name: string;
    ingredients: IngredientDto[];
    toppings: ToppingDto[];
    description: string;
    sizes: SizeDto[];
    doughs: DoughDto[];
    calories: number;
    protein: string;
    totalFat: string;
    carbohydrates: string;
    sodium: string;
    allergens: string[];
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isNew: boolean;
    isHit: boolean;
    img: string;
}

export interface CatalogResponseDto {
    success: boolean;
    reason: string;
    catalog: ProductDto[];
}

export interface ProductFilters {
    isVegetarian?: boolean;
    isGlutenFree?: boolean;
    isNew?: boolean;
    isHit?: boolean;
    minPrice?: number;
    maxPrice?: number;
}
