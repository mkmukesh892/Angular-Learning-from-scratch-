import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { DirectivesComponent } from './directives/directives.component';
import { ErrorFindingComponent } from './error-finding/error-finding.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileSelectDirective} from 'ng2-file-upload';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { OddEvenToggleComponent } from './odd-even-toggle/odd-even-toggle.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CustomForDirective } from './custom-for.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {LoggingService} from './logging.service';
import {AccountsService} from './accounts.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { HandleUsersComponent } from './handle-users/handle-users.component';
import {UsersService} from './users.service';
import { HomeComponent } from './home/home.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UsersComponent,
    DirectivesComponent,
    ErrorFindingComponent,
    CockpitComponent,
    ServerElementComponent,
    FileUploadComponent,
    FileSelectDirective,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OddEvenToggleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    CustomForDirective,
    AccountComponent,
    NewAccountComponent,
    AccountDetailsComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HandleUsersComponent,
    HomeComponent,
    RxjsExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService, AccountsService, UsersService],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
