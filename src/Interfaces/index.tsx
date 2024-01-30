export interface IUserData {
    username: string;
    email: string;
    address: string;
    phone: string;
    password: string;

}
export interface IformInput {
    label: string;
    type: string;
    id: string;
    name: keyof IUserData;
}