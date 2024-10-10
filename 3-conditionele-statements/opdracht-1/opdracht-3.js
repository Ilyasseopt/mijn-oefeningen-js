function groet(tijd) {
  if (tijd < 12) {
    return "Goedemorgen";
  }
  if (tijd > 12 && tijd < 18) {
    return "Goedemiddag";
  }
  if (tijd >= 18) {
    return "Goedenavond";
  }
}
console.log(groet(11));
