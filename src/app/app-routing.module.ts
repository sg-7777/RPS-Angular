import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoryComponent } from './history/history.component';
import { LoginGuardService } from './login-guard.service';

const routes: Routes = [
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'history/:gameid', component: HistoryComponent, canActivate: [LoginGuardService]},
  { path: 'game', component: GamePageComponent, canActivate: [LoginGuardService]},
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
