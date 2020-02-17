// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
let modal = document.getElementById("myModal");
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(modal);
  }, 6000);
});

promise
  .then(modal => {
    console.log("User has been on the page for 60 seconds");
    modal.style.display = "block";
  })
  .catch(err => {
    console.log(err);
  });
modal.addEventListener("click", e => {
  if (e.target.className === "close") {
    modal.style.display = "none";
  }
});
