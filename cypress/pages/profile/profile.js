
const firstname = '#user_firstname'
const updateBtn = '[name="commit"]'


class profilePage {

  static validateProfile(val) {
    cy.contains('Profile').click()
    cy.contains("#showfirstname").should('have.value',val) 
  }

  static clickOnEditProfile() {
    cy.contains('Edit Profile').click()
  }

  static updateProfile(name){
    cy.get(firstname).type(name)
    cy.get(updateBtn).click()
  }

}

export default profilePage;