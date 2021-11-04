// LN importants
import {
  optionsChart_1,
  optionsChart_2,
  optionsChart_3,
  optionsChart_4,
  optionsChart_5,
  optionsChart_6,
  optionsChart_7,
} from "./objects.js";

const wrapChartTag_1 = document.querySelector("#barchart");
const wrapChartTag_2 = document.querySelector(".circle-progress");
const wrapChartTag_3 = document.querySelector("#splinechart");
const wrapChartTag_4 = document.querySelector("#radial-storage");
const wrapChartTag_5 = document.querySelector("#project-overview-chart");
const wrapChartTag_6 = document.querySelector("#appexchart-tasks");
const wrapChartTag_7 = document.querySelector("#barchart-profile");

let chart_1 = null;
let chart_2 = null;
let chart_3 = null;
let chart_4 = null;
let chart_5 = null;
let chart_6 = null;
let chart_7 = null;

// Home Page

if (location.pathname == "/") {
  wrapChartTag_1.innerHTML = "";
  wrapChartTag_2.innerHTML = "";
  let chart_1 = new ApexCharts(wrapChartTag_1, optionsChart_1);
  let chart_2 = new ApexCharts(wrapChartTag_2, optionsChart_2);
  chart_1.render();
  chart_2.render();
}

// Blog Dashboard Page

if (location.pathname == "/blog-dashboard") {
  wrapChartTag_3.innerHTML = "";
  chart_3 = new ApexCharts(wrapChartTag_3, optionsChart_3);
  chart_3.render();
}

// File Manager

if (location.pathname == "/file-manager") {
  wrapChartTag_4.innerHTML = "";
  chart_4 = new ApexCharts(wrapChartTag_4, optionsChart_4);
  chart_4.render();
}

// Projects Overview

if (location.pathname == "/projects/overview") {
  wrapChartTag_5.innerHTML = "";
  chart_5 = new ApexCharts(wrapChartTag_5, optionsChart_5);
  chart_5.render();
}

// Tasks List

if (location.pathname == "/tasks") {
  wrapChartTag_6.innerHTML = "";
  chart_6 = new ApexCharts(wrapChartTag_6, optionsChart_6);
  chart_6.render();
}

// profile page

if (location.pathname == "/contacts/user-profile") {
  wrapChartTag_7.innerHTML = "";
  chart_7 = new ApexCharts(wrapChartTag_7, optionsChart_7);
  chart_7.render();
}

export { chart_1, chart_2, chart_3, chart_4, chart_5, chart_6, chart_7 };
