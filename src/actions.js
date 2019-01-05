export const BTN_CLICKED_AMOUNT = 'BTN_CLICKED_AMOUNT';


export function addToCounter(isClubOModalOpen) {
    console.log('hit action');

    return {
        type: BTN_CLICKED_AMOUNT,
        status: true
    };
}
