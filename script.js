window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
  
    // Si el scroll es mayor a 100px, cambia de color
    if (scrollY > 600) {
      document.body.style.backgroundColor = "#6761a8"; // color cuando se baja
    } else {
      document.body.style.backgroundColor = "white"; // color al principio
    }
  });