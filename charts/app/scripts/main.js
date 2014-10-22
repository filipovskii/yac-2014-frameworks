'use strict';

(function() {

var configForm = document.querySelector('form');

function render(frameworks, from, to) {
var soNewQuestionsChart = new window.Chart(),
    soAbsQuestionsChart = new window.Chart(),
    soNormQuestionsChart = new window.Chart(),
    ghNewStarsChart = new window.Chart(),
    ghAbsStarsChart = new window.Chart(),
    ghNormStarsChart = new window.Chart(),
    allCharts = [
      soNewQuestionsChart,
      soAbsQuestionsChart,
      soNormQuestionsChart ,
      ghNewStarsChart,
      ghAbsStarsChart,
      ghNormStarsChart
    ];

from = from || 0;

soNewQuestionsChart
  .setTitle('Number of new SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('New questions')
  .setSkipEvery(2)
  .setDOMId('so-questions-new');


soAbsQuestionsChart
  .setTitle('Abs number of SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('Questions')
  .setDOMId('so-questions-abs');


soNormQuestionsChart
  .setTitle('Normalized number of new SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('Questions Growth, %')
  .setSkipEvery(2)
  .setDOMId('so-questions-norm');


ghNewStarsChart
  .setTitle('Number of new github stars per month')
  .setSubTitle('Source: githubarchive.org')
  .setYAxisName('New stars')
  .setDOMId('gh-stars-new');


ghAbsStarsChart
  .setTitle('Number of total github stars in month')
  .setSubTitle('Source: githubarchive.org')
  .setYAxisName('Total stars')
  .setDOMId('gh-stars-abs');


ghNormStarsChart
  .setTitle('Normalized growth of github stars')
  .setSubTitle('Source: githubarchive.org')
  .setYAxisName('Stars Growth, %')
  .setDOMId('gh-stars-norm');

frameworks.forEach(function(fr) {
  var frLower = fr.toLowerCase(),
      color = window.COLOR_BY_FRAMEWORK[fr];

  // SO

  soNewQuestionsChart.addSeries({
    name: fr,
    color: color,
    data: window.STACK_OVERFLOW_NEW[frLower]
  });

  soAbsQuestionsChart.addSeries({
    name: fr,
    color: color,
    data: window.STACK_OVERFLOW_ABS[frLower]
  });

  soNormQuestionsChart.addSeries({
    name: fr,
    color: color,
    data: window.STACK_OVERFLOW_NORM[frLower]
  });


  // GH

  ghNewStarsChart.addSeries({
    name: fr,
    color: color,
    data: window.GITHUB_NEW_STARS[frLower]
  });

  ghAbsStarsChart.addSeries({
    name: fr,
    color: color,
    data: window.GITHUB_ABS_STARS[frLower]
  });

  ghNormStarsChart.addSeries({
    name: fr,
    color: color,
    data: window.GITHUB_NORM_STARS[frLower]
  });
});


allCharts.forEach(function (chart) {

  chart
    .setXAxis(window.DATES)
    .setFrom(from)
    .setTo(to)
    .draw();
});

}


(function() {

  var frDiv = document.querySelector('.frameworks');
  window.FRAMEWORKS.forEach(function(fr) {
    var frLabel = document.createElement('label'),
        frInput = document.createElement('input');


    frLabel.for = fr;
    frLabel.textContent = fr;
    frLabel.appendChild(frInput);

    frInput.type = 'checkbox';
    frInput.id = fr;
    frInput.name = fr;
    frInput.checked = true;

    frDiv.appendChild(frLabel);
  });

})();


document.querySelector('button').addEventListener('click', function(ev) {
  var frameworks = {}, from = 0, to = 56, toRender;

  ev.preventDefault();

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
