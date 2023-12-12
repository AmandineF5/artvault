import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class WithDataCustomPreloadStrategy implements PreloadingStrategy {
  
   preload(route: Route, fn: () => Observable<any>): Observable<any> {

    let result=of(null);

    if(route.data?.['preload']) {
      result=fn()
    }

    return result;
  }

}