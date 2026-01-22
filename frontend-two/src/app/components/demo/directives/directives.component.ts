import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  dynamicStyles = { color: 'blue', 'background-color': 'lightblue' };

  dynamicClasses = { feature: false, 'my-border': true };

  onMouseEnterStyle() {
    this.dynamicStyles = { color: 'green', 'background-color': 'lightgreen' };
  }

  onMouseLeaveStyle() {
    this.dynamicStyles = { color: 'blue', 'background-color': 'lightblue' };
  }

  onMouseEventClassToggle() {
    this.dynamicClasses.feature = !this.dynamicClasses.feature;
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
  }
}
