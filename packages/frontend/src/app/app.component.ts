import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  prompts$ = inject(HttpClient).get(import.meta.env['NG_APP_API_URL'] + 'prompts').pipe(
    map((x: any) => x?.data),
    tap((r) => console.log(r))
  );

  ngOnInit(): void {
  }
}
