// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2);
      console.log('Still working...');
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let theSum = 0;
  let a = await doublesLater(num);
  let b = await doublesLater(a);
  let c = await doublesLater(b);
  return a + b + c;
};

// 4. verification
handleSum(10).then((ans) => console.log(ans)); // 140
