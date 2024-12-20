type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = {
  name: "Ivan",
  color: "red",
};

const bottom = {
  position: 150,
  weight: 40,
};
console.log(compare(top, bottom));
