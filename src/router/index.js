export const TourRouter = (event, router) => {
    event.preventDefault()
    router.push('/')

}
export const DiscoRouter = (event, router) => {
    event.preventDefault()
    router.push('./discography')

}
export const MerchRouter = (event,router) => {
    event.preventDefault()
    router.push('./merch')
}