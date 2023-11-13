export interface LazyLoadProps {
  children: JSX.Element;
  width?: number | string;
  height?: number | string;
  once?: boolean;
  observerOptions?: IntersectionObserverInit;
}
