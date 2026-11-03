import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePostFiles } from '../../services/service.post.files';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-api-files-component',
  standalone: false,
  styleUrl: './api-files-component.css',
  templateUrl: './api-files-component.html',
})
export class ApiFilesComponent {
  public urlFile!: string;
  public mensaje!: string;
  @ViewChild("cajafile") cajafile!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePostFiles
  ){}

  uploadFile(): void {
    //POR UN LADO TENEMOS EL FICHERO DEL INPUT FILE
    let file = this.cajafile.nativeElement.files[0];
    //EN EL VALUE VIENE TODA LA RUTA: C:\pathfake\file....
    let miPath = this.cajafile.nativeElement.value.split("\\");
    //RECUPERAMOS EL ULTIMO VALOR: 2
    let fileName = miPath[2];
    //PARA LEER UN FICHERO SE UTILIZA FileReader
    let reader = new FileReader();

    //NECESITAMOS UN METODO DELEGADO PARA CUANDO EL READER FINALICE LA LECTURA
    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string;
      //TENEMOS UNA FUNCION LLAMADO btoa PARA CONVERTIR bytes a string
      base64 = 
      btoa(new Uint8Array(buffer)
      .reduce((data, byte) => data + String.fromCharCode(byte), ''));
      let fileModel = new FileModel(fileName, base64);
      this._service.postFile(fileModel).subscribe((response) => {
        this.mensaje = "Fichero subido correctamente";
        console.log(response);
      })
    }

    //LE INDICAMOS QUE COMIENCE A LEER LOS DATOS DEL FILE
    reader.readAsArrayBuffer(file);
  }
}
