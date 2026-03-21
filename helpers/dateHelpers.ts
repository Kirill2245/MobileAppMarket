export const formatDateToCustom = (dateString: string): string => {
    const date = new Date(dateString);
    
    // Настройка русской локали для месяцев
    const months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${month} ${year}`;
};