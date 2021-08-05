class Counter {
  commentCounter = (data) => {
    let counter = 0;
    data.forEach((element) => {
      counter += 1;
    });
    return counter;
  }
}

const counter = new Counter();
export { counter as default };