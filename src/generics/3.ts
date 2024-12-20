function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Ivan" }, { id: 123 }));
