'use strict';

(function() {

var configForm = document.querySelector('form');

function render(tags, from, to) {
var allCharts = [];

from = from || 0;

Object.keys(window.TAGS).forEach(function(cat) {
  var soAbsChart = new window.Chart(),
      soNormChart = new window.Chart(),
      ghStarsAbsChart = new window.Chart(),
      ghStarsNormChart = new window.Chart();

  allCharts.push(soAbsChart);
  allCharts.push(soNormChart);
  // allCharts.push(ghStarsAbsChart);
  // allCharts.push(ghStarsNormChart);


  soAbsChart
    .setTitle('Total number of Stackoverflow questions per month')
    .setSubTitle(cat)
    .setYAxisName('Number of questions');

  soNormChart
    .setTitle('Stackoverflow questions growth')
    .setSubTitle(cat)
    .setYAxisName('Questions growth, %');


  ghStarsAbsChart
    .setTitle('Total number of GitHub stars per month')
    .setSubTitle(cat)
    .setYAxisName('Number of stars');


  ghStarsNormChart
    .setTitle('GitHub stars growth')
    .setSubTitle(cat)
    .setYAxisName('Stars growth, %');


  Object.keys(window.TAGS[cat]).forEach(function(tag) {
    soAbsChart.addSeries({
      name: tag,
      data: window.STACK_OVERFLOW_ABS_BY_TAG[tag]
    });

    soNormChart.addSeries({
      name: tag,
      data: window.STACK_OVERFLOW_NORM_BY_TAG[tag]
    });

    ghStarsAbsChart.addSeries({
      name: tag,
      data: window.GITHUB_ABS_BY_TAG[tag]
    });

    ghStarsNormChart.addSeries({
      name: tag,
      data: window.GITHUB_NORM_BY_TAG[tag]
    });
  });

});


allCharts.forEach(function (chart) {

  chart
    .setXAxis(window.DATES)
    .setFrom(from)
    .setTo(to)
    .drawInside('.charts');
});

}

configForm.addEventListener('change', function() {
  var frameworks = {}, from = 0, to = 56, toRender;
  Array.prototype.forEach.call(configForm, function(inp) {
    if (inp.name === 'from') {
      from = parseInt(inp.value);
      return;
    }

    if (inp.name === 'to') {
      to = parseInt(inp.value) + 1;
      return;
    }

    frameworks[inp.name] = inp.checked;
  });

  toRender = Object.keys(frameworks).filter(function(fr) {
    return frameworks[fr];
  });

  setTimeout(function() {
    render(toRender, from, to);
  }, 100);
});

render(window.FRAMEWORKS);

})();
