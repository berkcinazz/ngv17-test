import { Routes } from '@angular/router';
import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';

export const routes: Routes = [
    { path: 'component1', component:Component1 },
    { path: 'component2', component:Component2 },
];
