import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-entry.component.html',
  styleUrl: './filter-entry.component.css'
})
export class FilterEntryComponent implements OnInit{
  statuses: string[];
  selected: string = '';

  entries: Entry[];

  constructor(private entryService: EntryService, private router: Router) {}

  ngOnInit(): void {
    this.loadStatus();
    this.entryService.getEntriesList().subscribe(data => {
      this.entries = data;
    })
  }

  loadStatus(): void {
    this.entryService.getStatus().subscribe(data => {
      this.statuses = data;
    },
    error => {
      console.error('Error Loading Statuses: ', error);
    })
  }

  onFilter(): void {
    console.log('Selected Status: ', this.selected);
    this.entryService.filterEntries(this.selected).subscribe(
      (data) => (this.entries = data), 
      (error) => console.error(error));
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
