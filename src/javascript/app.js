document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const background = document.createElement("div");
  background.className = "background-animated";
  document.body.insertBefore(background, document.body.firstChild); 


  const gridLines = document.createElement("div");
  gridLines.className = "grid-lines";
  background.appendChild(gridLines);

  
  for (let i = 0; i < 5; i++) {
    const pattern = document.createElement("div");
    pattern.className = "pattern";

    const size = Math.random() * 300 + 100;
    pattern.style.width = `${size}px`;
    pattern.style.height = `${size}px`;

    const side = Math.floor(Math.random() * 4); 

    if (side === 0) {
  
      pattern.style.top = `-${size / 2}px`;
      pattern.style.left = `${Math.random() * 100}%`;
    } else if (side === 1) {

      pattern.style.top = `${Math.random() * 100}%`;
      pattern.style.left = `calc(100% - ${size / 2}px)`;
    } else if (side === 2) {

      pattern.style.top = `calc(100% - ${size / 2}px)`;
      pattern.style.left = `${Math.random() * 100}%`;
    } else {

      pattern.style.top = `${Math.random() * 100}%`;
      pattern.style.left = `-${size / 2}px`;
    }

    pattern.style.animation = `float ${
      Math.random() * 10 + 15
    }s ease-in-out infinite, pulse ${
      Math.random() * 5 + 10
    }s ease-in-out infinite`;

    background.appendChild(pattern);
  }

  
  for (let i = 0; i < 15; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";

    const size = Math.random() * 200 + 50;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    
    let top, left;

    
    const area = Math.random();

    if (area < 0.25) {
      
      top = Math.random() * 100 + "%";
      left = Math.random() * 15 + "%"; 
    } else if (area < 0.5) {
    
      top = Math.random() * 100 + "%";
      left = 85 + Math.random() * 15 + "%"; 
    } else if (area < 0.75) {
      
      top = Math.random() * 15 + "%"; 
      left = Math.random() * 100 + "%";
    } else {
      
      top = 85 + Math.random() * 15 + "%"; 
      left = Math.random() * 100 + "%";
    }

    circle.style.top = top;
    circle.style.left = left;
    circle.style.animation = `float ${
      Math.random() * 20 + 20
    }s ease-in-out infinite`;

    background.appendChild(circle);
  }

  
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";

   
    const area = Math.random();

    if (area < 0.25) {
      
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 20}%`;
    } else if (area < 0.5) {
      
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${80 + Math.random() * 20}%`; 
    } else if (area < 0.75) {
      dot.style.top = `${Math.random() * 0}%`; 
      dot.style.left = `${Math.random() * 0}%`;
    } else {
      
      dot.style.top = `${80 + Math.random() * 20}%`; 
      dot.style.left = `${Math.random() * 100}%`;
    }

    background.appendChild(dot);
  }
});