import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'history/:gameid', component: HistoryComponent },
  { path: 'game', component: GamePageComponent },
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
