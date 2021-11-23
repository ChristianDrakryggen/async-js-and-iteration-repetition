const postsArray = [
  {
    title: "Post one",
    body: "This is post one",
  },
  {
    title: "Post two",
    body: "This is post two",
  },
];

const displayPosts = () => {
  setTimeout(() => {
    document.body.innerHTML = postsArray
      .map((postItem) => `<p>${postItem.title}</p>`)
      .join("");
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postsArray.push(post);
      let error = false;
      if (!error) {
        resolve("Successfully added post");
      } else {
        reject("Something went wrong");
      }
    }, 3000);
  });
};

//-----------------THEN() and CATCH()-------------------------//
/*createPost({
  title: "Post two",
  body: "This is post two",
})
  .then((res) => {
    alert(res);
    displayPosts();
  })
  .catch((err) => alert(err));*/

//------------------async/await-------------------------------//
const fn = async () => {
  try {
    const res = await createPost({
      title: "Post two",
      body: "This is post two",
    });
    alert(res);
    displayPosts();
  } catch (error) {
    alert(error);
  }
};

//fn();

//async/await with fetch
const fetchPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

//fetchPosts();

//-------------------------------------Promise.all-------------------------//

const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);

const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(
  (res) => res.json()
);

const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3").then(
  (res) => res.json()
);

promise1.then((res) => console.log(res));

Promise.all([promise1, promise2, promise3]).then((res) => console.log(res));
