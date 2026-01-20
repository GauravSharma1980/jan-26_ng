// Promise - Build
function buildPromise(arr) {
  const promise = new Promise((resolve, reject) => {
    if (arr.length > 3) {
      setTimeout(() => {
        resolve({ message: "success" });
      }, 1500);
    } else {
      reject(new Error("Something went wrong"));
    }
  });

  return promise;
}

// Promise - Consumer
// - .then().catch()
function consumePromiseWithThenCatch() {
  console.log("Start");
  buildPromise([1, 2, 3, 4])
    .then((response) => {
      console.log("Response : ", response);
      return response.message;
    })
    .then((message) => {
      console.log("Second Statement - ", message);
      buildPromise([1, 2]);
      // .catch(err => console.error(err))
    })
    .then(() => {
      console.log("Third Statement");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("End");
}
// consumePromiseWithThenCatch();

// - async...await

async function consumePromiseWithAsyncAwait() {
  console.log("Start");
  try {
    let { message: firstMessage } = await buildPromise([1, 2, 3, 4, 5]);
    console.log("Message : ", firstMessage);
    try {
      let { message: secondMessage } = await buildPromise([1, 2]);
      console.log("Message : ", secondMessage);
    } catch (err) {}
  } catch (err) {
    console.error(err);
  }
  console.log("End");
}

consumePromiseWithAsyncAwait();
