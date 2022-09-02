const d = document,
  w = window;

export default function scrollSpy() {

  const $elementosSectionData = d.querySelectorAll("section[data-scrollSpy]");



 const cb = (entries) => {
    entries.forEach(entry => {

      let id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
         d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.add("scroll-spy");
      }
      else{
        d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.remove("scroll-spy");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {threshold:[0.5,0.75]});

  $elementosSectionData.forEach((el) => observer.observe(el));

  /*
  Scroll Spy con Event "scroll"
  const $sections = d.querySelectorAll("section");

  //console.log($sections);

  w.addEventListener("scroll", () => {
    $sections.forEach((sec) => {
      let top = w.scrollY,
        offset = sec.offsetTop,
        height = sec.offsetHeight,
        id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {

        console.log("Top"+top+" Offset"+offset);
        console.log("Offset Height"+(offset + height));

        console.log("Se encuentra en " + id);
      }
    });
  });*/
}
