import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();

  toggleSidebar() {
    const currentValue = this.sidebarVisibleSubject.value;
    this.sidebarVisibleSubject.next(!currentValue);
  }

  setSidebarVisible(visible: boolean) {
    this.sidebarVisibleSubject.next(visible);
  }

  getSidebarVisible(): boolean {
    return this.sidebarVisibleSubject.value;
  }
}