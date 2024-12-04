document.getElementById("eredmeny").addEventListener("click", urhajos);
function urhajos() {
    let gagarin = 0
    let armstrong = 0
    let farkas = 0

    if (document.getElementById("nyelv_a").checked) gagarin = gagarin + 1
    if (document.getElementById("nyelv_b").checked) armstrong = armstrong + 1
    if (document.getElementById("nyelv_c").checked) farkas = farkas + 1

    if (document.getElementById("gagarin_fogas").checked) gagarin = gagarin + 1
    if (document.getElementById("armstrong_fogas").checked) armstrong = armstrong + 1
    if (document.getElementById("farkas_fogas").checked) farkas = farkas + 1

    if (document.getElementById("mufaj_a").checked) gagarin = gagarin + 1
    if (document.getElementById("mufaj_b").checked) armstrong = armstrong + 1
    if (document.getElementById("mufaj_c").checked) farkas = farkas + 1

    if (document.getElementById("gagarin_sport").checked) gagarin = gagarin + 1
    if (document.getElementById("armstrong_sport").checked) armstrong = armstrong + 1
    if (document.getElementById("farkas_sport").checked) farkas = farkas + 1

    if (document.getElementById("idezet_a").checked) gagarin = gagarin + 1
    if (document.getElementById("idezet_b").checked) armstrong = armstrong + 1
    if (document.getElementById("idezet_c").checked) farkas = farkas + 1
    let maxpont = 0
    const pontok = [gagarin, armstrong, farkas]
    for (let i = 0; i < pontok.length; i++) {
        if (maxpont < pontok[i]) {
            maxpont = pontok[i]
        }
    }
    if (maxpont === gagarin) {
        document.getElementById("kivagy").innerHTML = 
        `<div class="content">
            <img src="JS/gagarin.jpg" alt="Gagarin">
            <div>
                <h3>Az űrhajósod: Jurij Gagarin</h3>
                <p>Orosz származású szovjet űrhajós, az első ember a világűrben. 1961. április 12-én a Vosztok–1 fedélzetén egyedüli utasként Föld körüli pályára állt. Összesen 1 órát 48 percet töltött az űrben</p>
            </div>
        </div>`
    } else if (maxpont === armstrong) {
        document.getElementById("kivagy").innerHTML =
        `<div class="content">
            <img src="JS/armstrong.jpg" alt="Armstrong">
            <div>
                <h3>Az űrhajósod: Neil Armstrong</h3>
                <p>Amerikai űrhajós, az első ember, aki egy idegen égitestre, a Holdra tette a lábát. Élete során volt haditengerészeti repülőpilóta, űrhajós, NASA-vezető, farmer, egyetemi tanár és az üzleti élet befolyásos szereplője. Összesen 8 napot, 14 órát és 12 percet töltött az űrben</p>
            </div>
        </div>`
    } else if (maxpont === farkas) {
        document.getElementById("kivagy").innerHTML =
        `<div class="content">
            <img src="JS/farkas.jpg" alt="Farkas">
            <div>
                <h3>Az űrhajósod: Farkas Bertalan</h3>
                <p>Magyar vadászpilóta, űrkutató, űrhajós, eszperantista. Az Interkozmosz program keretében nyílt lehetősége az első magyarként a világűrbe jutni. Összesen 8 napot, 20 órát és 45 percet töltött az űrben</p>
            </div>
        </div>`
    }
}
