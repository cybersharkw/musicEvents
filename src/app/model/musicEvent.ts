export type mussicEvent = {

    id: string
    titel: string

    //location
    street: string
    plz: number
    place: string
    region: string | null
    latitude: number  | null
    longtiude: number  | null

    //dates
    createdAt: Date
    eventStartDate: Date
    eventEndDate: Date
    

}