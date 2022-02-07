import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '@app/config/api.service';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss']
})
export class TraceComponent implements OnInit {
  displayColumnsTrace: string[] = ['item', 'date', 'hour', 'operation', 'user','cdr','area'];
  dataSourceTrace;
  traceData;

  constructor( private apiService: ApiService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadTrace();
  }

  loadTrace() {
    this.apiService.post('/employTraze/v1/loadEmployTrace', {
    }, (result: any) => {      
      this.traceData = result.data;
      this.dataSourceTrace = new MatTableDataSource(this.traceData);
      this.dataSourceTrace.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {

    this.dataSourceTrace.filter = filterValue.trim().toLowerCase();
  }
}
