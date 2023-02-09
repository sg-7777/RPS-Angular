import { Injectable } from '@angular/core'; 
import { HttpHeaders } from '@angular/common/http';

@Injectable() 
export class Constants{
    public static readonly API_URL: string = "http://localhost:8080/";
    public static readonly PATH: string = "rest/play";
    public static readonly HTTP_HEADER = new HttpHeaders({ 'content-type': 'application/json'} );

}