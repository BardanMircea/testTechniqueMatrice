function multiTable(a) {
  return a * a;
}

function fonctionACorriger(a, b) {
  let c = 15;
  if (a + b < c) {
    console.log("c superieur");
  } else if (a + b === c) {
    console.log("c egal");
  } else {
    console.log("c inferieur");
  }
}

function retourner_un_tableau(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}
