// LN ckEditor
const ckEditorOptions = {
  toolbar: {
    items: [
      "heading",
      "fontSize",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "alignment",
      "|",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "toggleImageCaption",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

// LN Graphics
/* Home Page */
let optionsChart_1 = {
  chart: {
    type: "bar",
    with: "100%",
    height: 390,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    stacked: true,
  },
  legend: {
    offsetY: 5,
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
    },
  },
  yaxis: [
    {
      axisBorder: {
        show: false,
      },
    },
  ],
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: "email A",
      data: [44, 55, 41, 67, 22, 43, 12, 23],
    },
    {
      name: "email B",
      data: [13, 23, 20, 8, 13, 27, 23, 35],
    },
    {
      name: "email C",
      data: [11, 17, 15, 15, 21, 14, 45, 41],
    },
  ],
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2022 GMT",
      "01/02/2022 GMT",
      "01/03/2022 GMT",
      "01/04/2022 GMT",
      "01/05/2022 GMT",
      "01/06/2022 GMT",
      "01/07/2022 GMT",
      "01/08/2022 GMT",
    ],
    axisBorder: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#f5f5f5",
  },
};
let optionsChart_2 = {
  series: [90],
  chart: {
    height: 200,
    with: 200,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "14px",
          offsetY: 58,
        },
        value: {
          color: "#6c757d",
          offsetY: 25,
          fontSize: "16px",
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ["Earning"],
};

// Blog Dashboard Page
let optionsChart_3 = {
  series: [
    {
      name: "Current",
      data: [10, 13, 20, 15, 16, 17, 14, 23, 28, 23, 18, 16],
    },
    {
      name: "Previous",
      data: [12, 16, 22, 18, 17, 14, 11, 19, 21, 20, 17, 15],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    width: "98%",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
  },
  stroke: {
    width: 2,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  grid: {
    borderColor: "#f5f5f5",
  },
  colors: ["#feb019", "#0d6efd"],
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  fill: {
    type: "gradient",

    gradient: {
      shadeIntensity: 0.2,
      opacityFrom: 0.4,
      opacityTo: 0,
    },
  },
};

// File Manager
let optionsChart_4 = {
  series: [76],
  chart: {
    with: "100%",
    type: "radialBar",
    width: "100%",
    height: 150,
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: "auto",
        size: "67%",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          color: "#6c757d",
          offsetY: 0,
          fontSize: "15px",
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      track: {
        margin: 0,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
};

// Projects Overview
let optionsChart_5 = {
  series: [
    {
      name: "overview",
      data: [20, 35, 36, 35, 45, 49, 30],
    },
  ],
  chart: {
    height: 290,
    width: "97%",
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ["#0d6efd"],
  fill: {
    opacity: 1,
  },

  yaxis: {
    title: {
      text: "%(percentage)",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#6c757d",
      },
    },
  },

  xaxis: {
    categories: [20, 35, 36, 35, 45, 49, 30],
    axisBorder: {
      show: true,
    },
    title: {
      text: "week",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#6c757d",
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "10%",
    },
  },

  grid: {
    show: false,
  },
};

// Tasks List
let optionsChart_6 = {
  chart: {
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  colors: ["#0d6efd", "#198754"],
  series: [
    {
      name: "Complete Tasks",
      type: "column",
      data: [19, 15, 26, 37, 18, 27, 21, 13],
    },
    {
      name: "All Tasks",
      type: "line",
      data: [20, 23, 35, 42, 32, 27, 21, 17],
    },
  ],
  stroke: {
    width: 2,
    lineCap: "round",
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  xaxis: {
    categories: ["Jen", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
  legend: {
    horizontalAlign: "center",
  },
};

// profile page
let optionsChart_7 = {
  series: [
    {
      name: "overview",
      data: [20, 35, 36, 35, 45, 49, 30, 23, 35, 22, 17, 10],
    },
  ],
  chart: {
    height: 300,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ["#0d6efd"],
  fill: {
    opacity: 1,
  },

  yaxis: {
    title: {
      text: "$(thousands)",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#6c757d",
      },
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "10%",
    },
  },
  grid: {
    borderColor: "#f5f5f5",
  },
};

export {
  ckEditorOptions,
  optionsChart_1,
  optionsChart_2,
  optionsChart_3,
  optionsChart_4,
  optionsChart_5,
  optionsChart_6,
  optionsChart_7,
};
