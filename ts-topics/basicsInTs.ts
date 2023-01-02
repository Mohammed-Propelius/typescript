/* eslint-disable @typescript-eslint/no-unused-vars */
let firstName: string = "John"; // string
let age: number = 20; // number
firstName = "Kerems";
age = 85;

let studentPrsetn: boolean; // bool
let student: string[]; // array of string

let role: [number, string]; // tuples
role = [1, "ker"]; // tuples

// => Objects
type Person = {
  personName: string;
  personNumber: number;
};

let info: Person = {
  personName: "Mohammed",
  personNumber: 8569,
};

//Unknow
let transferData: unknown; // alternative of any

// void or Never
let fruitsData: (name: string) => never; // returns nothing
let fruitsInfo: (name: string) => void; // return a void

// Extening Types

type vegs = {
  veggieName: string;
  veggieQuantity: number;
};

type fruits = vegs & {
  // extending
  fruitsName: string;
  fruitsQuanity: number;
};

let basket: fruits = {
  veggieName: "Carrots",
  veggieQuantity: 12,
  fruitsName: "apple",
  fruitsQuanity: 25,
};

// Extending Interfaces
interface book {
  author: string;
  awards: boolean;
}


// Extends the Markets
interface market extends book {
  soldCopy: number;
  revenue: number;
}

let bookStore: market = {
  author: "Jim Rayn",
  awards: true,
  soldCopy: 74,
  revenue: 15233.21,
};


