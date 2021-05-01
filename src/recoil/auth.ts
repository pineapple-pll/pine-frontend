import { atom } from 'recoil'

type Auth = {
    id: string,
    token: string,
}

export const authState = atom<Auth>({
    key: 'authState',
    default: {
        id: '',
        token: ''
    }
})