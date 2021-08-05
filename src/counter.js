class Counter {
  commentCounter = (data) => {
    let counter = 0;
    for (let i = 0; i < data.length; i += 1) {
      counter += 1;
    }
    return counter;
  }
}

const counter = new Counter();
export { counter as default };