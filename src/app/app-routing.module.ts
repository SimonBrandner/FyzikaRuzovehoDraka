import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverterViewComponent } from './components/converter-view/converter-view.component';

import { TimeComponent } from './components/time/time.component';
import { LengthComponent } from './components/length/length.component';

const unitsConverter: Routes =
[
    {path: 'time', component: TimeComponent},
    {path: 'length', component: LengthComponent}
];

const routes: Routes =
[
    {path: 'converter', component: ConverterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
