import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private currentPath: string = '';

  constructor() { }

  set path(currentpath) {
    this.currentPath = currentpath;
  }

  get path() {
    return this.currentPath;
  }
}
