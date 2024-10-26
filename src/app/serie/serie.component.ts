import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  
  series: Array<Serie> = [];
  promedion: number = 0; 

  ngOnInit() {
    this.getSeriesList();
  }

  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promedio(); 
    });
  }

  promedio() {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.promedion = totalSeasons / this.series.length;
    } else {
      this.promedion = 0; 
    }
  }
}



