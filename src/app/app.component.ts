import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  src: string = 'https://via.placeholder.com/350x150';

  constructor(private ngZone: NgZone) {}

  onEdit(): void {
    var editor = new window.Pixo.Bridge({
      apikey: '30gmzfkromo0', // put your API key here!
      type: 'modal',
      onSave: (arg) => {
        this.ngZone.run(() => {
          this.src = arg.toDataURL();
        });
      },
    });
    editor.edit(this.src);
  }
}
