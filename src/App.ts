import { Component } from './core/heropy';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el;
        const thefooter = new TheFooter().el;
        const routerView = document.createElement('router-view');

        this.el.append(theHeader, routerView, thefooter);
    }
}
