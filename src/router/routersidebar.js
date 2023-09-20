export const TourRouter = (event, router, setShowNav, showNav) => {
    event.preventDefault()
    router.push('/')
    setShowNav(!showNav)
}
export const DiscoRouter = (event, router, setShowNav, showNav) => {
    event.preventDefault()
    router.push('./discography')
    setShowNav(!showNav)

}
export const MerchRouter = (event, router, setShowNav, showNav) => {
    event.preventDefault()
    router.push('./merch')
    setShowNav(!showNav)
}