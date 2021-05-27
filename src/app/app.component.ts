import { Component } from '@angular/core';
import { ComponentsService } from '@lib-core/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-debug-library';

  constructor(private componentsService: ComponentsService) {

  }
  ngOnInit (): void {

    this.componentsService.test();
  }
}
