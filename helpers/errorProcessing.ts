export function errorProcessing(error:any, lable:string){
    let errorMessage = `Произошла ошибка при ${lable}`;
    
    if (error.response) {

        const serverData = error.response.data;
        
        if (serverData.message) {
            if (Array.isArray(serverData.message)) {

                errorMessage = serverData.message.join('\n');
            } else {

                errorMessage = serverData.message;
            }
        } else if (serverData.error) {
            errorMessage = serverData.error;
        }
        
        console.log('📋 Server error details:', {
            status: error.response.status,
            message: errorMessage
        });
    } else if (error.request) {

        errorMessage = 'Нет соединения с сервером. Проверьте интернет-соединение.';
        console.log('🌐 Network error:', error.message);
    } else {

        errorMessage = error.message || 'Неизвестная ошибка';
    }
    
    const enhancedError: any = new Error(errorMessage);
    enhancedError.originalError = error;
    enhancedError.statusCode = error.response?.status;
    enhancedError.serverData = error.response?.data;
    
    return enhancedError;
}