import androids from "./android";
import cameras from "./camera";
import laptops from "./laptop";

const fakeArrayData = [...androids, ...cameras, ...laptops];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeArrayData);

export default fakeArrayData;
