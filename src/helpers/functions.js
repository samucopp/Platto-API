function selectDayOrNight(datetime) {
    const hora = datetime.getHours();
    if (hora >= 12 && hora < 16) {
        return "comida";
    } else if ((hora >= 20 && hora <= 23) || hora === 0) {
        return "cena";
    }
}

export const functions = {
    selectDayOrNight
}

export default functions;