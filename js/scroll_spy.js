const d = document,
  w = window;

export default function scrollSpy() {
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
  });
}
