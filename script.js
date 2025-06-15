// Smooth scroll or any future JS logic
console.log("Portfolio loaded");


document.addEventListener("DOMContentLoaded", function() {
  const skillItems = document.querySelectorAll("#skills li");
  const classes = ["skill-html", "skill-css", "skill-js", "skill-webdesign", "skill-git"];

  skillItems.forEach((item, index) => {
    // Add unique class for hover color
    item.classList.add(classes[index]);

    // Show effect with delay
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 300);
  });
});
