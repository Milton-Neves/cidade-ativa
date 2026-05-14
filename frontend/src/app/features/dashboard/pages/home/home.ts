import { Component } from '@angular/core';
import { MetricCard } from "../../components/metric-card/metric-card";
import { DashboardLineChart } from "../../components/charts/dashboard-line-chart/dashboard-line-chart";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MetricCard, DashboardLineChart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
