import { Children, createContext, useState } from "react";
import { setCookie } from 'nookies';
import   Router from 'next/router';
import axios from "axios";

type User = {
    cnpjcpf: string;
    email: string;
}
type SignInData = {
    cnpjcpf: string;
    email: string;
}
type AuthContextType = {
    isAuthenticated: boolean;
    email: User;
    signIn: (data: SignInData) => Promise<void>
 }

 async function SignInRequest() {
        

    // let userData = "cnpjcpf=06272793000184&email=informatica@lorencini.com.br&password=e10adc3949ba59abbe56e057f20f883e";

    // let res = await axios.post("https://api.lorencini.net.br/manager/api/v1/auth", userData,
    //                      { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    // let data = res.data.authorization;
    // console.log("login:"+userData);
    // console.log("token:"+data);


}

export const AuthContext = createContext({} as AuthContextType )

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated =  !!false;

    async function signIn({email, password}: SignInData){
        const { token, user } = await SignInRequest({
                    email,
                    password,
        })

        setCookie(undefined, 'lorenciniToken', token, {
            maxAge: 60 * 1, //1 minuto
        })

        setUser(user)

       // Router.push('/dashboard')

    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

