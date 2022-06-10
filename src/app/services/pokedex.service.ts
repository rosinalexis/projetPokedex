import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface ApiResult{
  count: number;
  next: string;
  previous: string;
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokemons(offset = 1 ): Observable<ApiResult>{
    return this.http.get<ApiResult>(
      `${environment.baseUrl}?offset=${offset}&limit=20`
    ).pipe();
  }


  getPokemonsDetails(name: string)
  {
    return this.http.get(
      `${environment.baseUrl}/${name}`
    );
  }
}
