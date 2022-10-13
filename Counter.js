// Implement the `counter` function according to requirements:
// - Function accepts a number as the first argument. This number represents the
// initial value for the counter.
// - If no value passed to a function, use `0` as initial value.
// - Function returns array with two function:
// - First function returns the current counter value.
// - Second function increases the internal counter value by one and does
// not return anything.

// - Multiple calls of `counter` function create independent instances of counter
// - If you want to have bonus points then write unit tests using your favorite
// framework.

// export function counter() {
// }

// const [getA, nextA] = counter(1);
// getA(); // 1
// nextA();
// getA(); // 2
// const [getB, nextB] = counter(10);
// nextB();
// getA(); // 2
// getB(); // 11
// nextA();
// getA(); // 3
// getB(); // 11

const counter = (n) => {
  let initial_value;
  if (n === undefined) {
    initial_value = 0;
    console.log(initial_value);
  } else {
    initial_value = n;
  }

  let firstIncreament = () => {
    return console.log(initial_value);
  };

  let internalIncreament = () => {
    initial_value++;
  };
  return [firstIncreament, internalIncreament];
};
const [firstIncreament, internalIncreament] = counter();

firstIncreament();
internalIncreament();
