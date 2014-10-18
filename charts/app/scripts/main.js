'use strict';

(function() {

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



soNewQuestionsChart
  .setTitle('Number of new SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('New questions')
  .setDOMId('so-questions-new');


soAbsQuestionsChart
  .setTitle('Abs number of SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('Questions')
  .setDOMId('so-questions-abs');


soNormQuestionsChart
  .setTitle('Normalized number of new SO questions per month')
  .setSubTitle('Source: StackOverflow.com')
  .setYAxisName('Questions')
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
  .setYAxisName('Growth')
  .setDOMId('gh-stars-norm');

window.FRAMEWORKS.forEach(function(fr) {
  var frLower = fr.toLowerCase();

  soNewQuestionsChart.addSeries(fr, window.STACK_OVERFLOW_NEW[frLower]);
  soAbsQuestionsChart.addSeries(fr, window.STACK_OVERFLOW_ABS[frLower]);
  soNormQuestionsChart.addSeries(fr, window.STACK_OVERFLOW_NORM[frLower]);

  ghNewStarsChart.addSeries(fr, window.GITHUB_NEW_STARS[frLower]);
  ghAbsStarsChart.addSeries(fr, window.GITHUB_ABS_STARS[frLower]);
  ghNormStarsChart.addSeries(fr, window.GITHUB_NORM_STARS[frLower]);
});


allCharts.forEach(function (chart) {

  chart
    .setXAxis(window.DATES)
    .draw();
});

})();
