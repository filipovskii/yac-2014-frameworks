/* global Highcharts */
'use strict';

(function() {
  var Chart = function() {
    this.skip = 0;
  };

  Chart.prototype.addSeries = function addChartData(name, data) {
    this.series = this.series || [];
    this.series.push({
      name: name,
      data: data
    });
    return this;
  };


  Chart.prototype.setTitle = function setChartTitle(title) {
    this.title = title;
    return this;
  };


  Chart.prototype.setSubTitle = function setChartSubTitle(subTitle) {
    this.subTitle = subTitle;
    return this;
  };


  Chart.prototype.setXAxis = function setCartXAxis(categories) {
    this.categories = categories;
    return this;
  };


  Chart.prototype.setDOMId = function setChartDOMId(domId) {
    this.domId = domId;
    return this;
  };


  Chart.prototype.setYAxisName = function setYAxisName(name) {
    this.yAxisName = name;
    return this;
  };


  Chart.prototype.setSkip = function setChartSkip(skip) {
    this.skip = skip;
    return this;
  };


  Chart.prototype.draw = function draw() {
    this.chart = new Highcharts.Chart({
      title: {
        text: this.title || '',
        x: -20
      },

      subtitle: {
        text: this.subtitle || '',
        x: -20
      },

      chart: {
        renderTo: this.domId,
        type: 'spline',
      },


      xAxis: {

        labels: {
          overflow: 'justify',
          step: 5
        },

        title: {
          text: 'Month'
        },

        categories: this.categories.slice(this.skip)

      },

      yAxis: {
        min: 0,
        title: {
          text: this.yAxisName || ''
        }
      },

      series: this.series.map(function(s) {
        return {
          name: s.name,
          data: s.data.slice(this.skip)
        };
      }, this)

    });
  };

  window.Chart = Chart;
})();

