import {AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogAporteComponent} from "./dialog.aporte.component";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Aporte} from "../../../models/Aporte";
import {TipoAtivo} from "../../../models/TipoAtivo";
import {DialogSetorComponent} from "../setor/dialog.setor.component";
import {DialogExcluirEntidadeComponent} from "../dialogs/excluir/dialog.excluir.entidade.component";

@Component({
  selector: 'aporte',
  templateUrl: './aporte.component.html',
  styleUrl: './aporte.component.scss'
})
export class AporteComponent implements AfterViewInit{
  readonly dialog = inject(MatDialog);
  dataSource = new MatTableDataSource<Aporte>([
    {id: 1, tipoAtivo: TipoAtivo.Acao, ativoId: 1, ativoDescricao: 'Banco do Brasil', preco: 35, quantidade: 100, dataRegistro: new Date('2024-06-02')},
    {id: 2, tipoAtivo: TipoAtivo.Acao, ativoId: 2, ativoDescricao: 'Ambev S.A.', preco: 20, quantidade: 50, dataRegistro: new Date('2024-07-12')},
    {id: 3, tipoAtivo: TipoAtivo.Acao, ativoId: 3, ativoDescricao: 'Cyrela', preco: 6.5, quantidade: 60, dataRegistro: new Date('2024-07-08')}
  ]);
  displayedColumns: string[] = ['tipoAtivo', 'ativoDescricao', 'ticker', 'preco', 'quantidade', 'dataAporte', 'acoes'];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  openDialogCreateAporte() {
    this.dialog.open(DialogAporteComponent);
  }

  ngAfterViewInit(): void {
  }

  openDialogEditAporte(aporte : Aporte) {
    this.dialog.open(DialogAporteComponent, {
      data: {
        aporte
      }
    });
  }

  openDialogExcluirAporte(aporte : Aporte) {
    this.dialog.open(DialogExcluirEntidadeComponent, {
      data: {
        nomeEntidade: "aporte",
        nomeAtivo: aporte.ativoDescricao
      }
    });
  }
}
