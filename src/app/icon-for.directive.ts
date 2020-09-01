import { Directive, Input } from "@angular/core";
import { MatIcon } from "@angular/material/icon";

@Directive({
  selector: "mat-icon[iconFor]",
})
export class IconForDirective {
  @Input()
  set iconFor(obj: any) {
    this._matIcon.svgIcon = "thumbs-up";
  }

  constructor(private readonly _matIcon: MatIcon) {}
}
