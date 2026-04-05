import { HiringFrequency } from "@/types/hiring-frequency.enum";
import { LevelExperience } from "@/types/level-experience.enum";


export interface CreateCustomerProfileDto{
    customerProfile:{
        nameCompany?:string
        sizeCompany:string
        industry:string
        typeSpecialists:string[]
        budget:number
        hiringFrequency:HiringFrequency
        preferenceLevelExperience: LevelExperience
    };
    userProfile?:{
        firstName?:string
        lastName?:string
        middleName?:string
        titleImg?:string
        phoneNumber?:string
    };
}

