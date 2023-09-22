import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuardGuard implements CanActivate {

  constructor (
    private stateservice: StateService,
    private router: Router
  ) {}



  canActivate(): boolean{
    
    let isLogged:boolean = false;
    this.stateservice.getisLogged().subscribe((value) => {
      isLogged = value;
      if(!value){
        this.router.navigateByUrl('/pag-principal');
      }
    })

    return isLogged;

  }
  
}
