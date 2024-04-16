import { Component } from '../core/heropy';

interface State {
    [key: string]: unknown;
    menus: {
        name: string;
        href: string;
    }[];
}

export default class TheHeader extends Component {
    public state!: State; // 할당단원, state선언 초기화가 된거처럼, 속이기?
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/',
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt4520988',
                    },
                    {
                        name: 'About',
                        href: '#/about',
                    },
                ],
            },
        });
        window.addEventListener('popstate', () => {
            this.render(); // 페이지가 로드될때 active클래스 추가
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <a 
            href="#/" 
            class="logo"> 
            <span>OMDbAPI</span>.COM 
        </a>
        <nav>
            <ul>
                ${this.state.menus
                    .map((menu) => {
                        const href = menu.href.split('?')[0];
                        const hash = location.hash.split('?')[0];
                        const isActive = href === hash;
                        return /* html */ `
                    <li> 
                        <a class="${isActive ? 'active' : ''}" 
                            href="${menu.href}"> 
                        ${menu.name} <a>
                    </li>
                    `;
                    })
                    .join('')}
            </ul>
        </nav>
        <a href="#/about" class="user">
            <img src="https://heropy.blog/css/images/logo.png" alt="User">
        </a>
        `;
    }
}
