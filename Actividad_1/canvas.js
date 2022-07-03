function draw() {
  const canvas = document.getElementById("canvas");

  let viewportHeight = window.innerHeight;
  let viewportWidth = window.innerWidth;

  console.log(viewportHeight, viewportWidth)


  canvas.style.height = `${viewportHeight / 2}px`
  canvas.style.width = `${viewportWidth / 1.5}px`
  canvas.style.border = "2px solid blue"
  canvas.style.background= "#000"



  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const DIM = 2.5
    // Body
    ctx.beginPath();
    ctx.arc(200 / DIM, 220 / DIM, 90 / DIM, 0, Math.PI * 4, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.arc(245 / DIM, 200 / DIM, 30 / DIM, 0, Math.PI * 3, true);
    ctx.arc(160 / DIM, 200 / DIM, 30 / DIM, 0, Math.PI * 3, true);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

   // Pupils
    ctx.beginPath();
    ctx.arc(170 / DIM, 200 / DIM, 15 / DIM, 0, Math.PI * 3, true);
    ctx.arc(240 / DIM, 200 / DIM, 15 / DIM, 0, Math.PI * 3, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // Mouth
    ctx.beginPath();
    ctx.arc(202 / DIM, 240 / DIM, 60 / DIM, 0, Math.PI * 1, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

  }
}
