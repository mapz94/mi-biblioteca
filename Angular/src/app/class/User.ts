export class User {
    id: number;
    username: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    password: string;
    rut: string;
    imgAvatar = '../../../assets/img/Avatar/defaultAvatar.jpg';
    fechaNacimiento = new Date();
}
