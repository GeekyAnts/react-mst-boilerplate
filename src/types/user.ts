export type RegisterUser = {
    name: string,
    password: string,
    confirm_password: string,
    address: {
        city: string,
        country: string,
    },
    gender: string,
    terms: boolean,
};
export type UpdateUser = {
    name: string,
    address: {
        city: string,
        country: string,
    },
    gender: string,
};
