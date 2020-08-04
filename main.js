"use strict";

{
  const close = document.querySelector(".close");
  const modal = document.querySelector(".modal");
  const mask = document.querySelector("#mask");

  document.addEventListener("DOMContentLoaded", function () {
    function btnClick() {
      // クリックした際に実行する処理を記述
      modal.classList.remove("hidden");
      mask.classList.remove("hidden");
    }
    // 引数に指定したclassの値をもつ要素をすべて取得
    const btns = document.getElementsByClassName("btn");
    // 上記で取得したすべての要素に対してクリックイベントを適用
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", btnClick);
    }
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  mask.addEventListener("click", () => {
    close.click();
  });
}
