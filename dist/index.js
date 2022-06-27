const invoke = window.__TAURI__.invoke;

const iBtn = document.querySelector(".i_btn");
const dBtn = document.querySelector(".d_btn");
const btnContainer = document.querySelector(".btn_container");

const count = document.querySelector(".count");

let n = 0;

btnContainer.addEventListener("click", async (e) => {
  const wbtn = e.target.dataset.wbtn;
  if (wbtn == "i") {
    n = await invoke("counter", { n: n, increase: true });
    count.textContent = n;
  }
  if (wbtn == "d") {
    n = await invoke("counter", { n: n, increase: false });
    count.textContent = n;
  }
});

invoke("counter", { n: 1, increase: true }).then((res) => console.log(res));
