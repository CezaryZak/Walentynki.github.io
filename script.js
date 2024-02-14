const alternatywy = [
  {tekst:"", obrazy:"images/cat-01.gif"},
  {tekst:"Obiecuję, że będzie super, zgódź się", obrazy:"images/cat-02.gif"},
  {tekst:"Pomyśl jeszcze raz", obrazy:"images/cat-03.gif"},
  {tekst:"No, śmiało, zdecyduj się na tak", obrazy:"images/cat-04.gif"},
  {tekst:"Będę najukochańszy, kliknij tak", obrazy:"images/cat-05.gif"},
]
const tak = {tekst:"Walentynkowy buziaczek dla Ciebie, KOCHAM CIĘ MALWINKA!", obrazy:"images/cat-yes.gif"}
const kot = document.querySelector('.cat')
const tekst = document.querySelector('.text')
const przyciski = document.querySelectorAll('.button')
const przyciskBłędu = document.querySelector('.button__error')

let licznik = 0;

function aktualizujWyświetlanie(element){
  kot.src = element.obrazy
  tekst.innerHTML = element.tekst
}

przyciskBłędu.addEventListener('click', ()=>{
  licznik = 0;
  aktualizujWyświetlanie(alternatywy[licznik])
  przyciski.forEach(btn => btn.style.display = 'inline-block')
  przyciskBłędu.style.display = 'none'
})

przyciski.forEach(przycisk => {
  przycisk.addEventListener('click', ()=>{
      if(przycisk.textContent == "Tak"){
          aktualizujWyświetlanie(tak)
          przyciski.forEach(btn => btn.style.display = 'none')
      }
      if(przycisk.textContent == 'Nie'){
          licznik++
          if(licznik < alternatywy.length){
              aktualizujWyświetlanie(alternatywy[licznik])
          }else{
              przyciski.forEach(btn => btn.style.display = 'none')
              przyciskBłędu.style.display = 'inline-block'
          }
      }
  })
})
