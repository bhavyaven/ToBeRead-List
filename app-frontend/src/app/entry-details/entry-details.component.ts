import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-details',
  standalone: true,
  imports: [],
  templateUrl: './entry-details.component.html',
  styleUrl: './entry-details.component.css'
})
export class EntryDetailsComponent implements OnInit {

  id: number
  entry: Entry
  constructor(private route: ActivatedRoute, private entryService: EntryService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.entry = new Entry();
    this.entryService.getEntryById(this.id).subscribe(data => {
      this.entry = data;
    })
  }

}
