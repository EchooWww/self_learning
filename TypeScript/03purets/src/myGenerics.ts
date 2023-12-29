const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["a", "b", "c", "d", "e"];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<T>(arg: T): T {
  return arg;
}

function getSearchProducts<T>(val: T): T {
  return val;
}

function anotherFunction<T, U extends number>(arg1: T, arg2: U): object {
  return {
    arg1,
    arg2,
  };
}

anotherFunction(1, 3.4);

interface Database {
  connection: string;
  pwd: string;
}

function newFunction<T, U extends Database>(arg1: U, arg2: T): object {
  return {
    arg1,
    arg2,
  };
}

newFunction({ connection: "123", pwd: "123" }, 1);
