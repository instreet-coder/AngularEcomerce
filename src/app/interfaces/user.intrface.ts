export interface User {
    firstName:string;
    lastName:string;
    email: string;
    address?: string;
    password: string;   
}
export interface Userregister {
    fullName: string;
    email: string;
    address: string;
    password: string;   
}

export interface Employee {
    imgLink: string;
    fullName: string;
    job: string;
    twitterLink: string;
    instagramLink: string;
    linkedinLink: string;
}