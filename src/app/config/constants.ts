import { Injectable } from '@angular/core'; 
import { HttpHeaders } from '@angular/common/http';

@Injectable() 
export class Constants{
    public static readonly API_URL: string = "http://localhost:8080/";
    public static readonly PLAY: string = "rest/play";
    public static readonly LOAD: string = "rest/loadgame";
    public static readonly SAVE: string = "rest/savegame";
    public static readonly HTTP_HEADER = new HttpHeaders({ 'content-type': 'application/json'} );
}