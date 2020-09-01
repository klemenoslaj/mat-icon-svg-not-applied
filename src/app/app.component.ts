import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  template: `
    <p>Plain <code>mat-icon</code> works perfectly</p>

    <mat-icon svgIcon="thumbs-up"></mat-icon>
    <pre>{{ code1 }}</pre>

    <br />
    <hr />
    <br />

    <p>
      Example with <code>iconFor</code> directive, that does <b>not</b> work:
    </p>
    <mat-icon [iconFor]="{}"></mat-icon>
    <pre>{{ code2 }}</pre>

    <br />
    <hr />
    <br />

    <p>
      Example with <code>iconFor</code> directive and empty
      <code>svgIcon</code> attribute, that works (workaround):
    </p>
    <mat-icon [iconFor]="{}" svgIcon></mat-icon>
    <pre>{{ code3 }}</pre>
  `,
  styles: [
    `
      mat-icon {
        border: 1px solid black;
      }

      :host {
        display: block;
        margin: 5rem;
      }
    `,
  ],
})
export class AppComponent {
  code1 = '<mat-icon svgIcon="thumbs-up"></mat-icon>';
  code2 = '<mat-icon [iconFor]="{}"></mat-icon>';
  code3 = '<mat-icon [iconFor]="{}" svgIcon></mat-icon>';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "thumbs-up",
      sanitizer.bypassSecurityTrustResourceUrl("assets/thumbup-icon.svg")
    );
  }
}
