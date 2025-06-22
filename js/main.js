
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("flowSlider");

let flowSpeed = parseFloat(slider.value);
slider.addEventListener("input", () => {
  flowSpeed = parseFloat(slider.value);
  console.log("Flow speed:", flowSpeed);
});

// Dummy visualisatie
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#888";
  ctx.fillRect(100, 250, 400, 30); // horizontale leiding
  ctx.beginPath();
  ctx.arc(500, 265, 15, 0, Math.PI / 2); // bocht
  ctx.lineTo(515, 400);
  ctx.lineTo(485, 400);
  ctx.lineTo(485, 280);
  ctx.fill();

  // Water simulatie
  ctx.fillStyle = "#0084ff";
  let waterLength = Math.min(flowSpeed * 80, 400);
  ctx.fillRect(100, 255, waterLength, 20);
  if (waterLength >= 400) {
    let verticalFlow = (flowSpeed - 5) * 40;
    verticalFlow = Math.max(0, Math.min(verticalFlow, 140));
    ctx.fillRect(485, 280, 30, verticalFlow);
  }

  requestAnimationFrame(render);
}

render();
