import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var promedioT = document.getElementById('promedio');
//Taller 2, uso de card
var detailsCard = document.getElementById('detailsCard');
var detailsImage = document.getElementById('detailsImage');
var detailsTitle = document.getElementById('detailsTitle');
var detailsDescription = document.getElementById('detailsDescription');
var detailsLink = document.getElementById('detailsLink');
renderSeries(series);
function renderSeries(series) {
    console.log("Rendering series . . . ");
    var num_series = series.length;
    var num_temp = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"serie-link\" data-serie-id=\"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        seriesTBody.appendChild(row);
        num_temp += serie.seasons;
        row.querySelector('.serie-link').addEventListener('click', function () {
            showSerieDetails(serie);
        });
    });
    console.log("Series rendered.");
    var promedio = num_temp / num_series;
    promedioT.innerHTML = "".concat(promedio);
}
function showSerieDetails(serie) {
    detailsCard.style.display = "block";
    detailsImage.src = serie.image;
    detailsImage.alt = serie.name;
    detailsTitle.textContent = serie.name;
    detailsDescription.textContent = serie.description;
    detailsLink.href = serie.link;
}
//Añade el resto de información de las series
//<td>${serie.description}</td>
//<td><a href="${serie.link}">Enlace</a></td>
//<td><img src="${serie.image}" alt="${serie.name}" width="100"></td>
//Taller 2
