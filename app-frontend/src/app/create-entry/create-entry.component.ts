import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { FormsModule } from '@angular/forms';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-entry.component.html',
  styleUrl: './create-entry.component.css'
})
export class CreateEntryComponent implements OnInit{
  entry: Entry = new Entry();
  constructor(private entryService: EntryService, private router: Router) {

  }

  ngOnInit(): void {
      
  }

  saveEntry() {
    this.entryService.createEntry(this.entry).subscribe( data => {
      console.log(data);
    },
    error => console.log(error));
  }

  goToEntryList() {
    this.router.navigate(['/entries']);
  }

  onSubmit() {
    console.log(this.entry);
    this.saveEntry();
    this.goToEntryList();
  }
}
