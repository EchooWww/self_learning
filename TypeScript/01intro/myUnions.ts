let score: string | number = 33;

score = "thirty three";

type User = {
  name: string;
  id: number;
};

type Admin = { username: string; id: number };

let hitesh: User | Admin = {
  username: "hitesh",
  id: 1,
};

hitesh = {
  username: "hitesh",
  id: 2,
};

const data: (number | string)[] = [1, 2, 3, 4, "5"];
