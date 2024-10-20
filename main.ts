import { series } from "./data.js";
import { Serie } from "./serie.js";

let seriesTBody: HTMLElement = document.getElementById('series')!;
let promedioT: HTMLElement = document.getElementById('promedio')!;
//Taller 2, uso de card
let detailsCard: HTMLElement = document.getElementById('detailsCard')!;
let detailsImage: HTMLImageElement = document.getElementById('detailsImage') as HTMLImageElement;
let detailsTitle: HTMLElement = document.getElementById('detailsTitle')!;
let detailsDescription: HTMLElement = document.getElementById('detailsDescription')!;
let detailsLink: HTMLAnchorElement = document.getElementById('detailsLink') as HTMLAnchorElement;

renderSeries(series);

function renderSeries(series: Serie[]): void {
    console.log("Rendering series . . . ");
    let num_series = series.length;
    let num_temp = 0;
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link" data-serie-id="${serie.id}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTBody.appendChild(row);
        num_temp += serie.seasons;
        row.querySelector('.serie-link')!.addEventListener('click', () => {
            showSerieDetails(serie);
        });
    });
    console.log("Series rendered.");
    let promedio = num_temp / num_series;
    promedioT.innerHTML = `${promedio}`;
}

function showSerieDetails(serie: Serie): void {
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
