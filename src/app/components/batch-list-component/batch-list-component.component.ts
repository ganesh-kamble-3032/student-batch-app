import { Component } from '@angular/core';

interface Batch {
  id: number;
  name: string;
}

@Component({
  selector: 'app-batch-list-component',
  templateUrl: './batch-list-component.component.html',
  styleUrls: ['./batch-list-component.component.css']
})
export class BatchListComponentComponent {

  batches: Batch[] = [
    { id: 1, name: 'Batch A' },
    { id: 2, name: 'Batch B' },
    { id: 3, name: 'Batch C' }
  ];
}
