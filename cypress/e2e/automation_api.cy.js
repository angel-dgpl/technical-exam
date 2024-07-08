describe('Public API Test', () => {
  it('Should fetch data from a public API', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('page');
        expect(response.body).to.have.property('data');
        expect(response.body.page).to.eq(1);
        expect(response.body.data[0]).to.have.property('id');
        expect(response.body.data[0]).to.have.property('email');
        expect(response.body.data[0]).to.have.property('first_name');
        expect(response.body.data[0]).to.have.property('last_name');
        expect(response.body.data[0]).to.have.property('avatar');
        expect(response.body.data[0].first_name).to.eq('George');
      });
  });
});