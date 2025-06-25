import { Injectable } from "@angular/core";
import { User, Userregister,  } from "../../interfaces/user.intrface";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService{
    user: BehaviorSubject<User | null> = new BehaviorSubject<User | null> (null);

    registerUser(registerUser: Userregister){
        this.user.next({
            firstName: registerUser.fullName.split(" ")[0],
            lastName: registerUser.fullName.split(" ")[1],
            email: registerUser.email,
            password:registerUser.password, 
        })
    }

    getUser(){
        return this.user.getValue();
    }    

    updateUser(userEditProfile: User){
        this.user.next(userEditProfile)
    }
}