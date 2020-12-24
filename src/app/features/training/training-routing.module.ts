import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';

import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
    { path: 'training', component: TrainingComponent, canActivate: [AuthGuard]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule {}