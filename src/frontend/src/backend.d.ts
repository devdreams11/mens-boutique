import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CartItem {
    color: string;
    size: string;
    productId: bigint;
    quantity: bigint;
}
export interface Product {
    id: bigint;
    originalPrice: number;
    name: string;
    sizes: Array<string>;
    discount: bigint;
    category: string;
    brand: string;
    rating: number;
    isNew: boolean;
    colors: Array<string>;
    price: number;
    reviewCount: bigint;
    isTrending: boolean;
}
export interface Category {
    id: bigint;
    name: string;
    itemCount: bigint;
    slug: string;
}
export interface backendInterface {
    addCategory(name: string, slug: string): Promise<bigint>;
    addProduct(name: string, brand: string, category: string, price: number, originalPrice: number, discount: bigint, sizes: Array<string>, colors: Array<string>, isNew: boolean, isTrending: boolean): Promise<bigint>;
    addToCart(productId: bigint, quantity: bigint, size: string, color: string): Promise<void>;
    addToWishlist(productId: bigint): Promise<void>;
    getAllCategories(): Promise<Array<Category>>;
    getCart(): Promise<Array<CartItem>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getWishlist(): Promise<Array<Product>>;
    removeFromCart(productId: bigint): Promise<void>;
    removeFromWishlist(productId: bigint): Promise<void>;
    searchProducts(searchText: string): Promise<Array<Product>>;
    updateCartItem(productId: bigint, quantity: bigint): Promise<void>;
}
