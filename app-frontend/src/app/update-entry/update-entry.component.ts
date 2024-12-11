import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { FormsModule } from '@angular/forms';
import { EntryService } from '../entry.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-entry.component.html',
  styleUrl: './update-entry.component.css'
})
export class UpdateEntryComponent implements OnInit {
  entry: Entry = new Entry();
  id: number;
  constructor(private entryService: EntryService, private actRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];

    this.entryService.getEntryById(this.id).subscribe( data => {
      this.entry = data;
    },
    error => console.log(error));
      
  }

  onSubmit() {
    this.entryService.updateEntry(this.id, this.entry).subscribe( data => {
      this.goToEntryList();
    },
    error => console.log(error));
  }

  goToEntryList() {
    this.router.navigate(['/entries']);
  }
}