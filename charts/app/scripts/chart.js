/* global Highcharts */
'use strict';

(function() {
  var Chart = function() {
    this.from = 0;
    this.to = undefined;
  };

  Chart.prototype.addSeries = function addChartSeries(s) {
    this.series = this.series || [];
    this.series.push(s);
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


  Chart.prototype.setFrom = function setChartFrom(from) {
    this.from = from;
    return this;
  };


  Chart.prototype.setTo = function setChartTo(to) {
    this.to = to;
    return this;
  };


  Chart.prototype.draw = function draw() {
    this.chart = new Highcharts.Chart({
      title: {
        text: this.title || '',
        x: -20
      },

      subtitle: {
        text: this.subTitle || '',
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

        categories: this.categories.slice(this.from, this.to)

      },

      yAxis: {
        min: 0,
        title: {
          text: this.yAxisName || ''
        }
      },

      plotOptions: {
        spline: {
          marker: {
            enabled: false
          }
        }
      },


      tooltip: {
        crosshairs: true,
        shared: true
      },


      series: this.series.map(function(s) {
        return {
          name: s.name,
          data: s.data.slice(this.from, this.to),
          color: s.color,
          lineWidth: 3
        };
      }, this)

    });
  };


  Chart.prototype.drawInside = function(selector) {
    Chart.id = Chart.id || 0;

    var container = document.querySelector(selector),
        el = document.createElement('div');

    el.id = Chart.id;
    container.appendChild(el);
    this.setDOMId(el.id);
    this.draw();

    Chart.id += 1;
  };

  window.Chart = Chart;
})();

