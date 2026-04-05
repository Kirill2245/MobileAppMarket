import { API_ENDPOINTS } from "@/config/api.config";
import { errorProcessing } from "@/helpers/errorProcessing";
import { apiClient } from "../client";
import { CreateCustomerProfileDto } from "../types/profile.types";

class ProfileApi{
    async createCustomerProfile(dto:CreateCustomerProfileDto){
        try{
            const response = await apiClient.post(API_ENDPOINTS.USER.CREATE_CUSTOMER_PROFILE, dto)

            return response
        }
        catch(error: any){
            console.error('❌ Register error caught in service');
            errorProcessing(error,'Создании профиля заказчика')
        }
    }
}

export const profileApi = new ProfileApi()