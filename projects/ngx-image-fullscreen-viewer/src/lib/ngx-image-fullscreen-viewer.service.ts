import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxImageFullscreenViewerService {
  constructor() {}

  isBase64(str: string) {
    const base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return base64regex.test(str);
  }

  base64FileExtension(str: string) {
    return str.substring('data:image/'.length, str.indexOf(';base64'));
  }
}
