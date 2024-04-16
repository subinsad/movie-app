import { Store } from '../core/heropy';

interface State {
    photo: string;
    name: string;
    email: string;
    blog: string;
    github: string;
    repository: string;
}

export default new Store<State>({
    photo: 'https://heropy.blog/css/images/logo.png',
    name: 'HEROPY / subin',
    email: 'subin@naver.com',
    blog: 'https://velog.io/@subinsad',
    github: 'https://github.com/subinsad',
    repository: 'https://github.com/subinsad/movie-app',
});
