import { Component } from '@angular/core';
import {Task} from "../shared/models/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mes tâchess à faire !';
  /**
   * Création d'un Tableau de Tâches
   * Il contiendra toutes les tâches
   * de notre application.
   * @types {any[]}
   */

  tasks: Task[] = [
    {
      id: 1,
      name: 'Promener le chien',
      status: false
    },
    {
      id: 2,
      name: 'Sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'Préparer une tarte',
      status: false
    },
    {
      id: 4,
      name: 'Faire la vaisellle',
      status: true
    },
  ];

  /**
   * L'utilisateur vien de terminer une tâche.

   */
    taskIsDone (task:Task) {
      task.status = true;
  }

}


