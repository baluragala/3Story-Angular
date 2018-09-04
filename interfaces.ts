interface IProduct {
  title: string;
  price: number;
  features?: Array<string>;
}

let p: IProduct;
p = { title: "aaa", price: 10, features: ["f1"] };
