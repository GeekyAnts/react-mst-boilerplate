import { RegisterUser, UpdateUser } from "../../types/user";
import httpService from "../HttpService";

// function login(username: string, password: string): Promise<any> {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             try {
//                 const userData = {
//                     name: "kuldeep",
//                     address: {
//                         city: "Bangalore",
//                         country: "India",
//                     },
//                     gender: "male",
//                     token: "73dbkjwfbk913ndq"
//                 };
//                 return resolve(userData);
//             } catch (e) {
//                 return reject(e);
//                 }
//         }, 2000);
//     });
// }
function login(username: string, password: string): Promise<any> {
    return httpService.doGet({
        url: "allBreads"
    })
    .then((response: any) => {
        const userData = {
            name: "kuldeep",
            address: {
                city: "Bangalore",
                country: "India",
            },
            gender: "male",
            token: "73dbkjwfbk913ndq"
        };
        // return response!.message;
        return userData;
    })
    .catch((error: any) => {
        return error;
    });  
    // return new Promise((resolve, reject) => { 
    //     setTimeout(() => {
    //         try {
    //             const userData = {
    //                 name: "kuldeep",
    //                 address: {
    //                     city: "Bangalore",
    //                     country: "India",
    //                 },
    //                 gender: "male",
    //                 token: "73dbkjwfbk913ndq"
    //             };
    //             return resolve(userData);
    //         } catch (e) {
    //             return reject(e);
    //             }
    //     }, 2000);
    // });
}
function logout(token: string): Promise<any> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                return resolve("TRUE");
            } catch (e) {
                return reject(e);
            }
        }, 2000);
    });
}
function register(userData: RegisterUser): Promise<any> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                const res = {
                    name: userData.name,
                    address: userData.address,
                    token: "73dbkjwfbk913ndq",
                    gender: userData.gender,
                };
                return resolve(res);
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
function update(userData: UpdateUser): Promise<any> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                const res = {...userData, token: "73dbkjwfbk913ndq"};
                return resolve(res);
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
export default { login, logout, register, update };