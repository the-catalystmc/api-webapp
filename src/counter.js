
class Counter {
    commentCounter = async (data) => {
        let counter = 0;
        data.forEach(element => {
            counter += 1;
        });
        return counter;
        console.log(counter);
    }
}

const counter = new Counter();
export { counter as default }