import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DataRendererComponent } from "./data-renderer/data-renderer.component";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { DetailResolver } from "./details.resolver";

const appRoutes: Route[] = [
    {
        path: '',
        component:ContactFormComponent ,
    
    },
    {
        path: 'datarenderer',
        component: DataRendererComponent,
        
    }

]


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);