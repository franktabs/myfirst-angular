import { Injectable } from '@angular/core';
import * as $ from "jquery";
@Injectable({
  providedIn: 'root',
})
export class DarkMode {
  #dark: boolean = false;

  getDark() {
    return this.#dark;
  }

  setDark(value: boolean) {
    this.#dark = value;
    // let docum = document.body;
    let body = $('body');
    if (this.#dark) {
      // docum.classList.add('dark');
      body.addClass("dark")
      $("body *").addClass("dark");
    }else{
      body.removeClass("dark")
      $("body *").removeClass('dark');

    }
    //  else {
    //   docum.classList.remove('dark');
    // }
  }
}
