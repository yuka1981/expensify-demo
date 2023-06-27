const add = (a, b) => a + b;
const generateGretting = (name = "Anonymous") => `Hello, ${name}`;

// global variable
// - test

test("should add two numbers", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

test("should generate gretting from name", () => {
  const result = generateGretting("Reid");
  expect(result).toBe("Hello, Reid");
});

test("should generate gretting from no name", () => {
  const result = generateGretting();
  expect(result).toBe("Hello, Anonymous");
});
