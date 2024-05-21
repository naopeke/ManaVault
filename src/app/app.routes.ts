import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeckbuilderComponent } from './pages/deckbuilder/deckbuilder.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'advanced', component: AdvancedComponent },
    { path: 'deckbuilder', component: DeckbuilderComponent },
    { path: 'contact', component: ContactComponent },

];
