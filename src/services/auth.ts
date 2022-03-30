import { v4 as uuid} from 'uuid';

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function SignInRequest(data: SignInRequestData){
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'Guilherme Santana',
            email: 'guilherme-dev@google.com',
            avatar_url: 'https://github.com/guilhermeforprojeto.png'

        }
    }
}

export async function recoverUserInformation(){
    await delay()
    return {
        token: uuid(),
        user: {
            name: 'Guilherme Santana',
            email: 'guilherme-dev@google.com',
            avatar_url: 'https://github.com/guilhermeforprojeto.png'

        }
    }
}