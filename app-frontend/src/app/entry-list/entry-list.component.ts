import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit(): void {
    this.entryService.getEntriesList().subscribe(data => {
      this.entries = data;
    })
  }
  
  private getEntries() {
    this.entryService.getEntriesList().subscribe(data => {
      this.entries = data;
    });
  }

  entryDetails(id: number) {
    this.router.navigate(['entry-details', id]);
  }

  updateEntry(id: number) {
    this.router.navigate(['update-entry', id]);
  }

  deleteEntry(id: number) {
    this.entryService.deleteEntry(id).subscribe(data => {
      console.log(data);
      this.getEntries();
    })
  }
}
