import { Component } from '@angular/core';
import { MetricCard } from "../../components/metric-card/metric-card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MetricCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
