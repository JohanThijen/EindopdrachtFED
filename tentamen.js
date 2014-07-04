window.onload = init;
function init() {
    //Click functions maken op de spans
    document.getElementById("nieuwekaart").addEventListener("click", nieuweKaart);
    document.getElementById("stop").addEventListener("click", stop);
    document.getElementById("submitt").addEventListener("click", getname);
    document.getElementById("all").style.visibility="hidden";
}
//Array's aanmaken
var tijdelijkSpeler = [];
var tijdelijkBank = [];
var kaartNummers = ["2", "3", "4", "5","6", "7", "8", "9", "10"]

//Elementen opvragen
var messagediv = document.getElementById("message")
var spelerdiv = document.getElementById("spelerkaart")
var bankdiv = document.getElementById("bankkaart")
var displaydiv = document.getElementById("displayname")

//Objecten gemaakt voor de speler en  de bank
var speler = {};
var bank = {};

function getname(event)
{
    event.preventDefault();
    var x = document.getElementById("Name").value;
    displaydiv.innerHTML=("Welkom " + x + "!");
    document.getElementById("naam").style.visibility="hidden";
    document.getElementById("all").style.visibility="visible";
}

function nieuweKaart() {

    // Een random getal uit de array pakken
    var kaartSpeler = kaartNummers[Math.floor(Math.random()*kaartNummers.length)];
    var kaartbank = kaartNummers[Math.floor(Math.random()*kaartNummers.length)];


    // Het random getal toevoegen aan de tijdelijke array
    tijdelijkSpeler.push(kaartSpeler);
    tijdelijkBank.push(kaartbank);

    //Getallen van de speler in de tijdelijke array bij elkaar optellen
    var totaalSpeler = 0;
    for(i=0; i < tijdelijkSpeler.length; i++)
    {
        totaalSpeler += Number(tijdelijkSpeler[i]);
    }
    //Getallen van de bank in de tijdelijke array bij elkaar optellen
    var totaalBank = 0;
    for(i=0; i < tijdelijkBank.length; i++)
    {
        totaalBank += Number(tijdelijkBank[i]);
    }

    //Totaal getallen aan het object toevoegen
    speler.totaal = totaalSpeler;
    bank.totaal = totaalBank;

    //Het totaal van de speler in de bank in de div toevoegeven
    spelerdiv.innerHTML=(speler.totaal);
    bankdiv.innerHTML=(bank.totaal);

    //If statements om te kijken of de speler of de bank gewonnen heeft.
    if(speler.totaal > 21)
    {
        messagediv.innerHTML =("U heeft verloren!");
    }else if (speler.totaal == 21)
    {
        messagediv.innerHTML =("U heeft gewonnen!");
    }else if(bank.totaal > 21)
    {
        messagediv.innerHTML =("U heeft gewonnen!");
    }else if(bank.totaal == 21)
    {
        messagediv.innerHTML =("U heeft verloren!");
    }
    else if(bank.totaal == 21 && speler.totaal == 21)
    {
        messagediv.innerHTML =("U heeft verloren!");
    }
}

//Bij deze functie trekt de bank nog 1 kaart. Als het totaal van de bank hierna dichter bij de 21 is heeft de bank gewonnen, anders de speler.
function stop(){

    var kaartbank = kaartNummers[Math.floor(Math.random()*kaartNummers.length)];
    tijdelijkBank.push(kaartbank);

    var totaalBank = 0;
    for(i=0; i < tijdelijkBank.length; i++)
    {
        totaalBank += Number(tijdelijkBank[i]);
    }
    //Bank totaal defineren
    bank.totaal = totaalBank;

    //bank.totaal aan de div toevoegen
    bankdiv.innerHTML=(bank.totaal);

    //Als de bank nog een kaart trekt en hij is dichterbij 21 dan de speler heeft de bank gewonnen. anders de speler.
    if(bank.totaal > 21)
    {
        messagediv.innerHTML =("U heeft gewonnen!");
    }else
    {
        messagediv.innerHTML =("U heeft verloren!");
    }

}