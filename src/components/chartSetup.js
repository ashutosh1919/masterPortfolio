import { ArcElement, Chart, Legend, Tooltip } from "chart.js";

// Chart.js 4 is tree-shakeable; register the pieces used by both doughnut charts.
Chart.register(ArcElement, Legend, Tooltip);
