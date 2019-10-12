// Start med at lave nogle variabler

//Sneglene laves som 'objekter', dvs. med flere properties/egenskaber
var snegl1 = {
    id: "a",
    navn: "Snegl 1",
    foto: "/Snegleræs/assets/images/snegl1.png",
    x: -160,
    y: -180
};

var snegl2 = {
    id: "b",
    navn: "Snegl 2",
    foto: "/Snegleræs/assets/images/snegl2.png",
    x: -160,
    y: -90
};

var snegl3 = {
    id: "c",
    navn: "Snegl 3",
    foto: "/Snegleræs/assets/images/snegl3.png",
    x: -160,
    y: 0
};

var snegl4 = {
    id: "d",
    navn: "Snegl 4",
    foto: "/Snegleræs/assets/images/snegl4.png",
    x: -160,
    y: 90
};

var sek = 0;
var minSpring = 3;
var maxSpring = 15;
var tidsinterval = 100;
var finishLine = 730;

window.onload = function () {
    //Finder frem til div'en "raceway" i HTML-dokumentet, for heri skal sneglene indsættes
    var racertrack = document.getElementById("raceway");

    //Opretter ny div i raceway-div'en en snegl's properties. Sneglenes properties er defineret i variablerne øverst.
    var s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className ="snegle-container";
    s1.title ="Jesper";
    s1.style.backgroundImage = "url('" + snegl1.foto + "')";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    racertrack.appendChild(s1);

    var s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className ="snegle-container";
    s2.title ="Frank";
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racertrack.appendChild(s2);

    var s3 = document.createElement("div");
    s3.id = snegl3.id;
    s3.className ="snegle-container";
    s3.title ="Romeo";
    s3.style.backgroundImage = "url('" + snegl3.foto + "')";
    s3.style.top = snegl3.y + "px";
    s3.style.left = snegl3.x + "px";
    racertrack.appendChild(s3);

    var s4 = document.createElement("div");
    s4.id = snegl4.id;
    s4.className ="snegle-container";
    s4.title ="Emely";
    s4.style.backgroundImage = "url('" + snegl4.foto + "')";
    s4.style.top = snegl4.y + "px";
    s4.style.left = snegl4.x + "px";
    racertrack.appendChild(s4);
}

//Funktionen der starter løbet. Aktiveres ved klik på knappen `startknap`
function start() {
    document.getElementById('startknap').style.display = "none";
    afsted();
};

//Funktion der får sneglene til at `løbe` (eller snegle sig afsted)...
function afsted () {
    // Ny position bestemmes
    // Sneglenes nuværende x-position øges med et tilfældig tal som laves i funktionen 'spring()'
    snegl1.x += spring();
    snegl2.x += spring();
    snegl3.x += spring();
    snegl4.x += spring();

    //Sneglene flyttes til den nye position i x-aksen
    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";
    document.getElementById(snegl3.id).style.left = snegl3.x + "px";
    document.getElementById(snegl4.id).style.left = snegl4.x + "px";

    //Spillet slutter når en eller begge snegle når i mål. Målet er angivet med variablen `finishLine`
    if (snegl1.x >= finishLine || snegl2.x >= finishLine || snegl3.x >= finishLine || snegl4.x >= finishLine) {
    if (snegl1.x > snegl2.x && snegl1.x > snegl3.x && snegl1.x > snegl4.x) {
        setTimeout("winner(`" + snegl1.navn + "`);", 1000); //Vinderen er snegl1
    }
    else if (snegl2.x > snegl1.x && snegl2.x > snegl3.x && snegl2.x > snegl4.x) {
        setTimeout("winner(`" + snegl2.navn + "`);", 1000); //Vinderen er snegl2
    }
    else if (snegl3.x > snegl1.x && snegl3.x > snegl2.x && snegl3.x > snegl4.x) {
        setTimeout("winner(`" + snegl3.navn + "`);", 1000); //Vinderen er snegl2
    }
    else if (snegl4.x > snegl1.x && snegl4.x > snegl2.x && snegl4.x > snegl3.x) {
        setTimeout("winner(`" + snegl4.navn + "`);", 1000); //Vinderen er snegl2
    }
    else {
        setTimeout("winner(``);", 1000); //Vinderen er snegl1
    }
}
else {
    setTimeout("afsted();", tidsinterval);
    sek = sek + 1;
}
};

//Funktionen der kårer vinderen
function winner(vinderen) {
    var tid = (sek * tidsinterval) / 1000;
    
    if (vinderen == "") {
        alert("Ræset er slut - det blev uafgjort! Det tog " + tid + " sekunder.");
    }
    else {
        alert ("Ræset blev vundet af " + vinderen  + "! Det tog " + tid + " sekunder.")
    }
    window.location.reload(); //Genindlæser siden og dermed spillet
};

// En funktion der returnerer et tilfældigt tal. Min og max er angivet i starten af .js filen
function spring() {
    var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
}