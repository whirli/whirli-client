export default interface AttributionSource {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    discountCode?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    gclid?: string;
    tduid?: string;
    sourceableId?: string;
    sourceableType?: string;
}
