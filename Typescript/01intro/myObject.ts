type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser: User = {
  _id: "1",
  name: "John",
  email: "John@gmail.com",
  isActive: false,
};

myUser.email = "h@gmail.com";
myUser.id = "2";

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cardCvv: string;
  };

export {};
