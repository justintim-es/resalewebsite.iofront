export interface IAction<T> {
  type: string;
  payload?: T;
  component: string;
}
export interface IActionCreator<T> {
  payload?: T;
  component: string;
}
export interface IBuyWebsite {
    available: string;
    currency: string;
    domain: string;
    period: number;
    price: number;
}
export interface IBuyWebsiteCart {
  id: number;
  items: IBuyWebsiteCartItem[]
  totalPrice: number;
}
export interface IBuyWebsiteCartItem {
  id: number;
  domain: string;
  price: number;
}
export interface IBuyWebsiteOnboardFetch {
  email: string;
  password: string;
}
