import { format } from "date-fns"

export function formatDate (Timestamp:number){
    const date = new Date(Timestamp)

    return(
        format(date,'dd/MM/yyyy HH:mm')
    )
};