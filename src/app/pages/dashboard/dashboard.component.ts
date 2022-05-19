import { map } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this._breakpointObserver.observe(
    [Breakpoints.Medium,
    Breakpoints.Small,
    Breakpoints.XSmall
    ]).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 2, rows: 1 },
            { title: 'Card 3', cols: 2, rows: 1 },
            { title: 'Card 4', cols: 2, rows: 1 }
          ];
        }

        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 2 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      })
    );

  gridCards = this._breakpointObserver.observe([
    Breakpoints.Medium,
    Breakpoints.Small,
    Breakpoints.XSmall
  ]).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Grid Card 1', cols: 12, span: 1, rows: 1 },
          { title: 'Grid Card 2', cols: 6, span: 1, rows: 1 },
          { title: 'Grid Card 3', cols: 6, span: 2, rows: 1 },
          { title: 'Grid Card 4', cols: 6, span: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Grid Card 1', cols: 1, span: 12, rows: 1 },
        { title: 'Grid Card 2', cols: 1, span: 6, rows: 1 },
        { title: 'Grid Card 3', cols: 7, span: 6, rows: 2 },
        { title: 'Grid Card 4', cols: 1, span: 6, rows: 1 }
      ];
    })
  );

  constructor(private _breakpointObserver: BreakpointObserver) { }
}
