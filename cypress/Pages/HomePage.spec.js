class HomePage {
    navigate() {
        cy.visit('https://academybugs.com/find-bugs/#')
        // cy.get('[href="/login"]').click()
    }

}
export default HomePage;