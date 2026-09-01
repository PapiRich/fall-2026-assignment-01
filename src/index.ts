/**
 * Use this file as a scratchpad to manually test your code.
 *
 * You can run this file using:
 * npm run dev
 */

import { extractAdmins, type AdminUser,type GuestUser } from "./exercise09.js";

// Example:
// import { formatName } from './exercise01.js';
// console.log(formatName('John', 'Doe', 'Quincy'));
//import { formatName } from './exercise01.js';
//console.log(formatName('John', 'Doe', 'Quincy'));
//import { transcribeDNA } from './exercise02.js';
//console.log(transcribeDNA('ATCG'));
//import { getInventoryValue } from './exercise03.js'
//const inventory: Array<[string, number, number]> = [
//   ['Hammer', 10, 5],
//   ['Saw', 3, 20],
//   ['Drill', 7, 50],
// ];
// console.log(getInventoryValue(inventory));
// console.log(calculateArea({kind: "circle", radius: 5}));
// console.log(calculateArea({
//   kind: "rectangle",
//   width: 5,
//   height: 10
// }));
//console.log(calculateArea({ kind: "square", sideLength: 5 }));
//console.log(initializeConfig({port: 5000}));
// const stack = new Stack<number>();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(calculateSubjectAverage("Math"));
// console.log(calculateSubjectAverage("History"));
// const emitter = new SimpleEventEmitter<EventMap>();

// emitter.on("launch", (data) => {
//   console.log("Launch:", data);
// });

// emitter.on("shutdown", (data) => {
//   console.log("Shutdown:", data);
// });

// emitter.emit("launch", "Rocket launched!");
// emitter.emit("shutdown", 10);
const users: Array<AdminUser | GuestUser> = [
  {
    adminId: "A001",
    permissions: ["read", "write"],
  },
  {
    guestToken: "G001",
    expiresAt: new Date(),
  },
  {
    adminId: "A002",
    permissions: ["read"],
  },
];

console.log(extractAdmins(users));