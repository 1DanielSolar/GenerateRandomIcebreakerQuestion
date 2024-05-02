function generateName() {
  const names = [
    " Daniel",
    " Dante",
    " Brett",
    " Uriel",
    " Alfi",
    " Victor",
    " Remsey",
    " Rene",
    " Kayla",
    " Kadi",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * names.length);

  document.getElementById("displayName").innerHTML = "Hi" + names[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();
