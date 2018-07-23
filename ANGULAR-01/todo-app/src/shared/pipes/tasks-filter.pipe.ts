import { Pipe, PipeTransform } from '@angular/core';
import {Task} from 'src/shared/models/task';
import * as _ from 'lodash';

@Pipe({
  name: 'tasksFilter',
  pure: false
})
export class TasksFilterPipe implements PipeTransform {
  /**
   * Ici, ma fonction "trasform" va recevoir en paramètre un tableau de tâches à filtrer,
   * par rapport au status.
   * Ainsi, si "status = true", la fonction retournnera
   * toutes les tâches "true" du tableau de "tasks"
   * @param {Task[]} tasks
   * @param {boolean} status
   * @returns {Task[]}
   */
  transform(tasks: Task[], status: boolean):  Task[] {
    return _.filter(tasks, { 'status': status })
