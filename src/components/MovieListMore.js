import { Component } from '../core/heropy';
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
    constructor() {
        super({
            tagName: 'button',
        });
        movieStore.subscribe('pageMax', () => {
            const { page, pageMax } = movieStore.state;
            pageMax > page
                ? this.el.classList.remove('hide')
                : this.el.classList.add('hide');
        });
    }
    render() {
        this.el.classList.add('btn', 'view-more', 'hide');
        this.el.textContent = 'Viw more..';

        this.el.addEventListener('click', async () => {
            await searchMovies(movieStore.state.page + 1);
        });
    }
}
