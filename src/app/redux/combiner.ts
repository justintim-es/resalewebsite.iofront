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
