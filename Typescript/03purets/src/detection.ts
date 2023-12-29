function detectType(val: number | string) {
  if (typeof val === "number") {
    val.toFixed(2);
  } else if (typeof val === "string") {
    val.toLowerCase();
  }
}

function provideId(id: string | null) {
  if (!id) {
    console.log("No id provided");
    return;
  }
  id.toLowerCase();
}

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim() !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "Fish food";
  } else {
    return "Bird food";
  }
}
