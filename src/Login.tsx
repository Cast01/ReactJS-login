interface LoginParameterType {
    username: string,
    password: string,
}

export async function Login({username,password}: LoginParameterType) {
    const delay = (0.7 + Math.random() * 2) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === '123456' && username) {
                resolve({
                    message: "Login bem sucedido!"
                });
            } else {
                reject({
                    message: "Username ou senha inválido",
                });
            }
        }, delay);
    });
} 