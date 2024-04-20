import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PickerComponent } from "./components/picker/picker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PickerComponent]
})
export class AppComponent {
  title = 'Nimbus-app';
}
