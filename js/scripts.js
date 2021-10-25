$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const inputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    const outputArray = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"]
    let arrayIndex = 0;

    inputArray.forEach(function(element) {
      $(outputArray[arrayIndex]).text(element);
      arrayIndex += 1;



    });
/*    
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
*/
    $("#story").show();
  });
});