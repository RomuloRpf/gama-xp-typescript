interface Usuario {
    nome: string,
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Fulano',
        email: 'fulano@email.com'
    }
}

function setUser(usuario: Usuario){
    //....
}