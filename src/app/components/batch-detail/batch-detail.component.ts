import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Batch {
  id: number;
  name: string;
}

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent {

  batch: Batch | undefined;

  private batches: Batch[] = [
    { id: 1, name: 'Batch A' },
    { id: 2, name: 'Batch B' },
    { id: 3, name: 'Batch C' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.batch = this.batches.find(b => b.id === id);
  }
}
