import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, switchMap, catchError, throwError, timeout } from 'rxjs';
import { PokemonDetailDto, PokemonsDto } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonsPage(offset: number, limit: number = 20): Observable<PokemonsDto> {
    const url = `${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`;
    console.log('🌐 Llamando a la API:', url);
    
    return this.http.get<PokemonsDto>(url).pipe(
      timeout(30000),
      catchError(this.handleError)
    );
  }

  getPokemonDetail(nameOrId: string | number): Observable<PokemonDetailDto> {
    const url = `${this.baseUrl}/pokemon/${nameOrId}`;
    console.log('🌐 Llamando a detalle:', url);
    
    return this.http.get<PokemonDetailDto>(url).pipe(
      timeout(30000),
      catchError(this.handleError)
    );
  }

  getPokemonsWithDetails(offset: number, limit: number = 20): Observable<PokemonDetailDto[]> {
    console.log('📦 Iniciando carga de Pokémon con offset:', offset, 'limit:', limit);
    
    return this.getPokemonsPage(offset, limit).pipe(
      switchMap(response => {
        console.log('📋 Lista recibida. Cantidad:', response?.results?.length);
        
        if (!response.results || response.results.length === 0) {
          console.warn('⚠️ No se encontraron resultados');
          return [];
        }
        
        const detailRequests = response.results.map(pokemon => {
          console.log('🔍 Solicitando detalle de:', pokemon.name);
          return this.getPokemonDetail(pokemon.name);
        });
        
        return forkJoin(detailRequests);
      }),
      catchError((error) => {
        console.error('❌ Error en getPokemonsWithDetails:', error);
        return throwError(() => error);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('❌ Error HTTP detallado:', {
      status: error.status,
      statusText: error.statusText,
      message: error.message,
      url: error.url
    });
    
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de cliente: ${error.error.message}`;
    } else {
      errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
    }
    
    return throwError(() => new Error(errorMessage));
  }
}