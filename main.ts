import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonsAverageElm: HTMLElement = document.getElementById("seasonsAverage")!;

renderSerieInTable(dataSeries);

seasonsAverageElm.innerHTML = `Seasons average: ${getSeasonsAverage(dataSeries)}`

function renderSerieInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((series) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${series.id}</td>
                             <td style="color: DodgerBlue;">${series.name}</td>
                             <td>${series.channel}</td>
                             <td>${series.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      
    });
  }

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  dataSeries.forEach((series) => totalSeasons = totalSeasons + series.seasons);
  let seasonsAverage: number = totalSeasons/dataSeries.length;
  return seasonsAverage;
}


