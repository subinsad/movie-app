import { Component } from '../core/heropy';

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer',
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
        <div>
            <a href="https://github.com/subinsad/movie-app">
                github Repository    
            </a>
        </div>
        <div>
            <a href="https://github.com/subinsad/movie-app">
                ${new Date().getFullYear()}
                subin
            </a>
        </div>
        `;
    }
}
