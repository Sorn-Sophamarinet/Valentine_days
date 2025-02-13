document.getElementById("revealBtn").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("valentineImage").style.display = "block";
  setTimeout(() => {
    document.getElementById("message").style.display = "block";
  }, 500);
});

document.getElementById("yesBtn").addEventListener("click", function () {
  alert("Yay! Happy Valentine's Day! ❤️");
});
document.getElementById("revealBtn").addEventListener("click", function () {
  document.getElementById("pop").style.display = "none";
});

document.getElementById("noBtn").addEventListener("mouseover", function () {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();
  const btnRect = this.getBoundingClientRect();

  let newX = Math.random() * (cardRect.width - btnRect.width);
  let newY = Math.random() * (cardRect.height - btnRect.height);

  this.style.transform = `translateX(${newX}px)`;
});
