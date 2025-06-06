import anime from "animejs";

// Função auxiliar para verificar se o elemento existe
const getElement = (refOrSelector) => {
  if (typeof refOrSelector === "string") {
    return document.querySelector(refOrSelector);
  }
  return refOrSelector.current;
};

// 1. Animação CSS com ease-function
export const animateCSS = () => {
  anime({
    targets: ".grid-item",
    translateX: ["-20px", "0"],
    opacity: [0, 1],
    duration: 800,
    easing: "easeOutQuad",
    delay: anime.stagger(100),
  });
};

// 2. Animação SVG (balanço lateral da bicicleta)
export const animateBikeSwing = (targetRef) => {
  const el = getElement(targetRef);
  if (!el) return;

  return anime({
    targets: el,
    rotate: ["-15deg", "15deg"],
    duration: 1000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    transformOrigin: "50% 100%",
  });
};

// 3. Animação Motion Path
export const animateMotionPath = (targetRef) => {
  const el = getElement(targetRef);
  if (!el) return;

  let path = document.getElementById("motionPath");
  if (!path) {
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.id = "motionPath";
    path.setAttribute("d", "M0,50 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "transparent");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "absolute";
    svg.style.width = "0";
    svg.style.height = "0";
    svg.appendChild(path);
    document.body.appendChild(svg);
  }

  return anime({
    targets: el,
    translateX: anime.path("#motionPath", "x"),
    translateY: anime.path("#motionPath", "y"),
    duration: 5000,
    loop: true,
    easing: "easeInOutSine",
  });
};

// 4. Animação Morph
export const animateMorph = (targetRef) => {
  const el = getElement(targetRef);
  if (!el) return;

  return anime({
    targets: el,
    d: [
      { value: "M20,20 L80,20 L80,80 L20,80 Z" },
      { value: "M50,20 L80,50 L50,80 L20,50 Z" },
    ],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
};

export const animateImageMorph = (targetRef) => {
  const el = getElement(targetRef);
  if (!el) return null;

  return anime({
    targets: el,
    scale: [0.9, 1.1],
    borderRadius: ["20%", "50%"],
    duration: 3000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
};
