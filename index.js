$("select").change(e => {
  const selected = e.target.value;
  rotate = selected === "red" ? "0" : selected === "yellow" ? "90" : "180";
  $(".circle-four").css("transform", `rotate(${rotate}deg)`);
});
