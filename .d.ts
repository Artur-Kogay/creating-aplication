declare module "*.scss" {
  const exports: { [exportName: string]: string };
  export = exports;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
