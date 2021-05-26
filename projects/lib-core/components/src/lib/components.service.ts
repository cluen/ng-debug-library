import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  public test (): number {
    console.log('test-method');
    return 1;
  }
}
