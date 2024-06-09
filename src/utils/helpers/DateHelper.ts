export const formatDateDayFullMonth = (date: Date): string => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const monthIndex = date.getMonth();

    return day + ' ' + months[monthIndex];
} 