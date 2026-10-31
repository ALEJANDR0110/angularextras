import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceImagen } from '../../services/service.imagen';
import { Imagen } from '../../models/imagen';

@Component({
    selector: 'app-subir-imagen-component',
    standalone: false,
    styleUrl: './subir-imagen-component.css',
    templateUrl: './subir-imagen-component.html',
})
export class SubirImagenComponent {
    @ViewChild("cajaImagen") cajaImagen!: ElementRef;
    public imagen!: Imagen;

    constructor(
        private _service: ServiceImagen
    ) {}

    seleccionarImagen() {
        const fichero = this.cajaImagen.nativeElement.files[0];

        if (fichero) {
            let reader = new FileReader();

            reader.onload = () => {
                let base64 = reader.result as string;
                base64 = base64.split(',')[1];
                
                this.imagen = new Imagen(
                    fichero.name,
                    base64
                );
                console.log(this.imagen);
            };
            reader.readAsDataURL(fichero);
        }
    }

    async subirFichero(): Promise<void> {
        if (!this.imagen) {
            console.log("Primero debes seleccionar una imagen");
            return;
        }

        try {
            let response = await this._service.subirFichero(this.imagen);

            console.log("Imagen subida correctamente");
            console.log(response);
        } catch (error) {
            console.log("Error al subir la imagen", error);
        }
    }
}