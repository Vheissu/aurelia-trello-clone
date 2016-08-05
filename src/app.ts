import {Aurelia, autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Trello Clone';

        config.map([
            {
                route: '', 
                moduleId: './home',
                name: 'home',        
                nav: true, 
                title: 'Home'
            },
            {
                route: 'b/:id/:name', 
                moduleId: './board',
                name: 'board',        
                nav: false, 
                title: 'Board'
            }
        ]);

        this.router = router;
    }
}
