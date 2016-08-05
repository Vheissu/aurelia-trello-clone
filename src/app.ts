import {Aurelia, autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Built With Aurelia';

        config.map([
            {
                route: '', 
                moduleId: './home',
                name: 'hone',        
                nav: true, 
                title: 'Home'
            }
        ]);

        this.router = router;
    }
}
