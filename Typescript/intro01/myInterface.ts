interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => void;
  startTrail(): void;
  getCoupon(couponName: string): number;
}

const echo: User = {
  dbId: 1,
  email: "echo@h.com",
  userId: 1,
  googleId: "123",
  startTrail: () => {
    console.log("trail started");
  },
  getCoupon: (couponName: string) => {
    return 10;
  },
};
