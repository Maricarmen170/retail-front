const menu = document.querySelector(".menu__icon");
const menuDesple = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menuDesple.classList.toggle("click");
});

/*-------------------------------------------------------- */
const ctx1 = document.getElementById("myBarra1").getContext("2d");

const myChart1 = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Rest of the World", "Germany", "France", "United Kingdom"],
    datasets: [
      {
        label: "INGRESO PROMEDIO",
        data: [44.5547302778, 25.3383268698, 25.0942000961, 20.8618615648],
        backgroundColor: [
          "rgba(0, 0, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          borderColor: "rgba(255, 206, 86, 1)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          borderColor: "rgb(255, 255, 255 , 1)",
        },
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
  },
});
/* --------------------------------------------*/
const ctx2 = document.getElementById("myBarra2").getContext("2d");

const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["United Kingdom", "Rest of the World", "Germany", "France"],
    datasets: [
      {
        label: "INGRESOS TOTALES",
        data: [7285024.6440000003, 1164571.54, 228678.4, 208934.31],
        backgroundColor: [
          "rgba(0, 0, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          borderColor: "rgba(255, 206, 86, 1)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          borderColor: "rgb(255, 255, 255 , 1)",
        },
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
  },
});

/* ---------------------------------------------------------------------------------------  */

document.getElementById("loadDataButto").addEventListener("click", loadDatLin1);

function loadDatLin1() {
  fetch("data/linea1.json")
    .then((response) => response.json())
    .then((data) => renderLinea1(data))
    .catch((error) => console.error("Error al cargar los datos:", error));
}

function renderLinea1(linea1) {
  const ctx = document.getElementById("myLinea1").getContext("2d");
  const labels = linea1.map((date) => date.DATE);
  const revenueData = linea1.map((date) => date.SUM_REVENUE);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "INGRESOS TOTALES",
          data: revenueData,
          backgroundColor: "rgba(255, 255, 0)",
          borderColor: "rgba(255, 255, 255)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            borderColor: "rgba(255, 206, 86, 1)",
          },
          ticks: {
            color: "white",
          },
        },
        y: {
          grid: {
            borderColor: "rgb(255, 255, 255 , 1)",
          },
          ticks: {
            color: "white",
          },
          beginAtZero: true,
        },
      },
    },
  });
}

/*-----------------------------------------------------------------------------*/

const ctx3 = document.getElementById("myLinea2").getContext("2d");

const myChartLine = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "INGRESO TOTALES",
        data: [
          568101.3100000001, 446084.92, 594081.76, 468374.331, 677355.15,
          660046.05, 598962.901, 644051.04, 950690.202, 1035642.45,
          1156205.6100000001, 1087613.1699999999,
        ],
        backgroundColor: [
          "rgba(0, 0, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 0)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          borderColor: "rgba(255, 206, 86, 1)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          borderColor: "rgb(255, 255, 255 , 1)",
        },
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
  },
});

/* ---------------------------------------------------------------------------------------------- */
document.getElementById("loadDataButton").addEventListener("click", loadData);

function loadData() {
  fetch("data/rfmData.json")
    .then((response) => response.json())
    .then((data) => renderChart(data))
    .catch((error) => console.error("Error al cargar los datos:", error));
}

function renderChart(rfmData) {
  const ctx = document.getElementById("rfmChart").getContext("2d");
  const labels = rfmData.map((customer) => `Cliente ${customer.customerID}`);
  const recencyData = rfmData.map((customer) => customer.recency);
  const frequencyData = rfmData.map((customer) => customer.frequency);
  const monetaryData = rfmData.map((customer) => customer.monetary);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Recency",
          data: recencyData,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Frequency",
          data: frequencyData,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Monetary",
          data: monetaryData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

/* ------------------------------------------------------------------------------------------ */

const ctx4 = document.getElementById("myBarra3").getContext("2d");

const myChart3 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: ["0", "1", "2", "3", , "4", "5", "6"],
    datasets: [
      {
        label: "RECENCIA PROMEDIO",
        data: [
          34.4315169367, 164.0, 155.1284987277, 6.8888888889, 3.6666666667,
          14.2227722772, 295.2,
        ],
        backgroundColor: [
          "rgba(0, 0, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          borderColor: "rgba(255, 206, 86, 1)",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          borderColor: "rgb(255, 255, 255 , 1)",
        },
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
  },
});
