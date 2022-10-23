import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById("series");
var seasonsAverageElm = document.getElementById("seasonsAverage");
renderSerieInTable(dataSeries);
seasonsAverageElm.innerHTML = "Seasons average: ".concat(getSeasonsAverage(dataSeries));
function renderSerieInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series.id, "</td>\n                             <td style=\"color: DodgerBlue;\">").concat(series.name, "</td>\n                             <td>").concat(series.channel, "</td>\n                             <td>").concat(series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    dataSeries.forEach(function (series) { return totalSeasons = totalSeasons + series.seasons; });
    var seasonsAverage = totalSeasons / dataSeries.length;
    return seasonsAverage;
}
