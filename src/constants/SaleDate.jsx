const SALE_TITLE = 'Holiday Sale';
const SALE_PERCENTAGE = 20;
const ADVERT_START = 'November 22, 2022 11:59:59 PM';
const SALE_START = 'November 22, 2022 12:00:00 AM';
const SALE_END = 'December 23, 2023 11:59:59 PM';

const today = new Date();
const advertiseStart = new Date(ADVERT_START);
const START = new Date(SALE_START);
const END = new Date(SALE_END);
const SALE_ON = today > advertiseStart && today < END;

export { START, END, SALE_ON, SALE_PERCENTAGE, SALE_TITLE };
