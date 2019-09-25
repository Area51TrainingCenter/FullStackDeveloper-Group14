import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appInterceptor';

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.listar().subscribe(data => console.log(data))
  }

}
