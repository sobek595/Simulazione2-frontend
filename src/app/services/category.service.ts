import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  protected http = inject(HttpClient);
  categoryList(){
    return this.http.get<any[]>(`${environment.apiUrl}/api/categorie`);
  }
}
