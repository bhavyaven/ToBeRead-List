import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { FilterEntryComponent } from './filter-entry/filter-entry.component';

export const routes: Routes = [
    {path: 'entries', component: EntryListComponent},
    {path: 'create-entry', component: CreateEntryComponent},
    {path: 'update-entry/:id', component: UpdateEntryComponent},
    {path: '', redirectTo: 'entries', pathMatch: 'full'},
    {path: 'entry-details/:id', component: EntryDetailsComponent},
    {path: 'filter-entry', component: FilterEntryComponent}
];
