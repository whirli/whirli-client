interface ClaimGuestBasket {
    basketId: string;
}

interface ClaimGuestGift {
    guestToken: string;
}

interface ClaimGuestBasketAndGift {
    basketId: string;
    guestToken: string;
}

export type ClaimGuestResources = ClaimGuestBasket | ClaimGuestGift | ClaimGuestBasketAndGift;
