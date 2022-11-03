import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from './friends/friend/friend.component';
import { RouteGuard } from './routeguard.service';
import { ValidateRouteService } from './friends/route.service';

const appRoutes:Routes=
[
  {
    path:'',component:HomeComponent
  },
  {
    path:'friends',component:FriendsComponent , canActivate: [RouteGuard]
  },
  {
    path:'friends/:name',component:FriendComponent
  },
  {
    path:'downloads',component:DownloadsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    DownloadsComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RouteGuard,ValidateRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
