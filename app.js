$(document).ready(() => {
  const urls = {
    barChart: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json',
    scatterPlot: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json',
    heatMap: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json',
    forceDirectedGraph: 'https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json',
    meteoriteMap: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json'
  }

  Promise.all([
    $.getJSON(urls['barChart']),
    $.getJSON(urls['scatterPlot']),
    $.getJSON(urls['heatMap']),
    $.getJSON(urls['forceDirectedGraph']),
    $.getJSON(urls['meteoriteMap']),
  ])
  .then((allData) => {
    console.log(allData);
  });
});
