//henter elementer fra DOM
let oppgaveEl = document.querySelector('#oppgave')
let svarEl = document.querySelector('#svar')
let sjekkBtn = document.querySelector('#sjekk')
let nyoppgBtn = document.querySelector('#nyoppg')
let resultatEl = document.querySelector('#resultat')
let regneartEl = document.querySelector('h2')

//legger til en lytter til knappen som sjekker svaret
sjekkBtn.addEventListener('click', sjekkSvar)

//Legger til en lytter til input elementet 
svarEl.addEventListener('keydown', sjekkSvar)

//Deklarerer fasiten
let fasit

//Funkjson som lager oppgaver
function lagOppgave(){
  /*   //Lager tilfeldig heltall fra og med 0 til og med 10
    let a = Math.floor(Math.random()*11)
    let b = Math.floor(Math.random()*11)
 */
    //Henter regneart
    let regneart = regneartEl.innerHTML

    //Addisjon
    if(regneart == "Addisjon"){ //Sjekker hvilken type regneart
    //Lager tilfeldig heltall fra og med 0 til og med 100
    let a = Math.floor(Math.random()*101)
    let b = Math.floor(Math.random()*101)
            
    //Skriver oppgaven inn i HTML
    oppgaveEl.innerHTML = `${a} + ${b} = ?`

    //Regner ut fasit
    fasit = a+b
    }

     //Subtraksjon
    else if(regneart == "Subtraksjon"){ //Sjekker hvilken type regneart
    //Lager tilfeldig heltall fra og med 0 til og med 100
    let a = Math.floor(Math.random()*101)
    let b = Math.floor(Math.random()*101)
        
    //Skriver oppgaven inn i HTML
    oppgaveEl.innerHTML = `${a} - ${b} = ?`
                    
    //Regner ut fasit
    fasit = a-b    
    }

    //Multiplikasjon
    else if(regneart == "Multiplikasjon"){ //Sjekker hvilken type regneart
    //Lager tilfeldig heltall fra og med 0 til og med 100
    let a = Math.floor(Math.random()*11)
    let b = Math.floor(Math.random()*11)
    
    //Skriver oppgaven inn i HTML
    oppgaveEl.innerHTML = `${a} X ${b} = ?`

    //Regner ut fasit
    fasit = a*b
    }

  
}

//Kaller funksjonen
lagOppgave()


//funksjonen som sjekker at vi har rett svar
function sjekkSvar(e){
    // e står for event object (hendelsesobjekt). alternativt skriver vi evt eller event

    console.log(e)
//console.log("Sjekker svaret")
if(e.key=="Enter" || e.target.id=="sjekk"){
//Sjekker om brukeren har skrevet noe i input elementet
if (svarEl.value !=""){
    //Henter svarer fra brukeren
let svar = Number(svarEl.value)

//sjekker om svaret er riktig
if(svar === fasit){
    console.log('Du svarte riktig!')
    resultatEl.innerHTML = "Du svarte riktig!"
}
else {
    console.log("Feil svar...")
    resultatEl.innerHTML = "Feil svar..."
}

//Skjuler sjekk svar knappen slik at vi bare kan svare en gang
sjekkBtn.style = "display: none;"
}


//alt det over skjer bare hvis det står noe i input elemtet. (Fikset buggen om at den tolker tomt element som en besvarelse)

}
}

nyoppgBtn.addEventListener('click',nyoppg)
function nyoppg(){
    location.reload()
}



