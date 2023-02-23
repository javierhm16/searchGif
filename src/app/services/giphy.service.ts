import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const g_url = environment.g_url;
const api_key = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  getGif(str: string) {
    return this.http.get(`${g_url}?q=${str}&api_key=${api_key}`);
  }

}
