import { createRouter } from '../core/heropy';
import Home from './Home.js';
import Movie from './Movie.js';

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/movie', component: Movie },
]);
