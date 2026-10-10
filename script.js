const img1 = document.getElementById("john-img");
const btn1 = document.getElementById("Toggle");
const btn2 = document.getElementById("random");
const names = document.getElementById("name");
const pic = document.querySelector(".pic");
let res = {};
const gender = document.getElementById("gender");
btn1.addEventListener("click", () => {
  if (img1.id == "john-img") {
    img1.src = "./jane.png";
    img1.id = "jane-img";
    names.innerHTML = "JANE";
    gender.innerHTML = "Female";
    pic.style.backgroundImage = 'url("./jane.png")';
  } else {
    img1.src = "./john.png";
    img1.id = "john-img";
    names.innerHTML = "John Doe";
    gender.innerHTML = "Male";
    pic.style.backgroundImage = 'url("./john.png")';
  }
});

btn2.addEventListener("click", () => {
  async function randomness() {
    let req = await fetch("https://randomuser.me/api/");
    res = await req.json();
    img1.src = res.results[0].picture.large;
    names.innerHTML = res.results[0].name.first;
    gender.innerHTML = res.results[0].gender;
    pic.style.backgroundImage = `url( ${res.results[0].picture.large})`;
  }

  randomness();
});
