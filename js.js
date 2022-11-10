function xmlCelulares() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        TableCelulares(this);
    }
    xhttp.open("GET", "celulares.xml");
    xhttp.send();
}
function TableCelulares(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("phone");
    let table = "<tr><th>Nombre</th><th>Modelo</th><th>Año</th><th>Precio</th><th>Productor</th><th>Procesador</th></tr>";
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("model")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("productor")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("procesador")[0].childNodes[0].nodeValue + "</td>"

    }
    document.getElementById("contenidoxml").innerHTML = table;
}

function xmlComputadoras() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        TableComputadoras(this);
    }
    xhttp.open("GET", "computadoras.xml");
    xhttp.send();
}
function TableComputadoras(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("pc");
    let table = "<tr><th>Nombre</th><th>Modelo</th><th>Año</th><th>Precio</th><th>Productor</th><th>Procesador</th></tr>";
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("model")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("productor")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("procesador")[0].childNodes[0].nodeValue + "</td>"

    }
    document.getElementById("contenidoxml").innerHTML = table;
    xhttp.close();
}