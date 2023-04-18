let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.cell(Math.random() * 1000)

btn.onclick = function()
{
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.cell(Math.random() * 1000)
}


