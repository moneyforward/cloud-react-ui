type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

declare module '*.svg' {
  const value: any;
  export default value;
}
