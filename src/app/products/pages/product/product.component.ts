import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }



//Resumen en Orden de Ejecución
// 1. ngOnChanges: Cuando los datos de entrada son enlazados o cambiados.
// 2- ngOnInit: Después del primer ngOnChanges.
// 3. ngDoCheck: Durante cada ciclo de detección de cambios.
// 4. ngAfterContentInit: Después de proyectar el contenido en el componente.
// 5. ngAfterContentChecked: Después de verificar el contenido proyectado.
// 6. ngAfterViewInit: Después de inicializar las vistas del componente.
// 7. ngAfterViewChecked: Después de verificar las vistas del componente.
// 8. ngOnDestroy: Antes de destruir el componente.
// Este es el flujo correcto del ciclo de vida de un componente Angular, con ngOnChanges siendo llamado antes que ngOnInit.
}
