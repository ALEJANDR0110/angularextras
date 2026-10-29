import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Imagen } from "../models/imagen";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ServiceImagen {
    url = environment.urlApiImagenes;

    constructor(
        private _http: HttpClient
    ) {}

    async subirFichero(file: Imagen): Promise<any> {
        let request = "UploadFiles/SubirFichero";
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        return firstValueFrom(
        this._http.post<any>(this.url + request, file, {headers: header})
        )
    }
}