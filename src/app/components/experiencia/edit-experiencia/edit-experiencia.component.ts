import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  
  constructor(
    private sExperiencia: SExperienciaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      },
      err => {
        console.log(err);
        alert('Error al modificar experiencia laboral');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        alert('Error al modificar experiencia laboral');
        console.log(err);
        this.router.navigate(['']);
      }
    );
  }
}

