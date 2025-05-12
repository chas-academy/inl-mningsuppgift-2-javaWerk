// Definera array av namn
let people = [
  "Erik", "Anna", "Lars", "Karin", "Karl", "Maria", "Per", "Kristina", "Anders", "Eva",
  "Johan", "Sara", "Mats", "Ingrid", "Fredrik", "Gunilla", "Oskar", "Helena", "Magnus", "Elin",
  "Björn", "Emma", "Gustav", "Linda", "Niklas", "Jenny", "Tobias", "Cecilia", "Henrik", "Sofia",
  "Daniel", "Rebecca", "Marcus", "Hanna", "Alexander", "Frida", "Jonas", "Malin", "Sebastian", "Ida",
  "Patrik", "Josefin", "Mattias", "Lovisa", "Viktor", "Amanda", "Simon", "Julia", "Peter", "Agnes"
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDisplay = document.getElementById("resultDisplay");
  
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    let inputName = searchInput.value;
    // 2. Skapa en boolean för found
    let found = false
    // 3. Loopa igenom people-arrayen
    for (let person of people) {
      // 4. Jämför texten med varje namn i arrayen
      if (person === inputName) {
        // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
        resultDisplay.innerHTML = "Namn hittades!"
        found = true
       } if (!found) {
          // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
          resultDisplay.innerHTML = "Namn hittades inte." 
          found = false
        }
      }})
    
        
    
}




// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});