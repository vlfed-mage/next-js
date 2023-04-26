export interface Product {
    id: string;
    title: string;
    description: string;
}

export interface Products {
    products: Product[];
}

export interface ProductDetailsPageProps {
    product: Product;
}

export interface Username {
    username: string;
}

export interface UserIdPageProps {
    userId: string;
}
