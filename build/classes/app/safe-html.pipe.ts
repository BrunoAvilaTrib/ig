import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
