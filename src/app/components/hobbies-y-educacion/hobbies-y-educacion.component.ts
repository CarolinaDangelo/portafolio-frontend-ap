import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hobbies-y-educacion',
  templateUrl: './hobbies-y-educacion.component.html',
  styleUrls: ['./hobbies-y-educacion.component.css']
})
export class HobbiesYEducacionComponent implements OnInit {
  educationList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educationList = data.education;
    });
  }

}
