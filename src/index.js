const onClickAdd = () => {
  // 入力欄のテキストを取得
  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  textEl.value = "";

  // メモのエレメント作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;
  const button = document.createElement("button");
  button.textContent = "削除";

  //メモの削除処理
  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // メモの追加
  div.appendChild(p);
  div.appendChild(button);
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
