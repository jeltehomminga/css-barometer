$("select").change(e =>
  $(".circle-four").css("transform", `rotate(${e.target.value}deg)`)
);
