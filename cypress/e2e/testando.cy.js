describe('testando alguns textos ou tags do meu curso já feito', function(){
    beforeEach(function(){
        cy.visit('https://deividfuzari.github.io/projeto-android/')
    })

    it('verificando o titulo do meu site', function(){
        cy.title().should('eq', 'Como surgiu o Mascote do Android?')
    })

    it('verificando o titulo do meu cabeçalho', function(){
        cy.get('header').find('h1').should('have.text', 'CURIOSIDADES DE TECNOLOGIA')
    })

    it.only('manipular os elementos do nav', function(){
        cy.get('nav a[href="#"]').should('have.length', 4)
            .each(function($href){
                cy.wrap($href).invoke('text', 'Fuzari')
                cy.wrap($href).click()
                cy.url().should('include', 'projeto-android')
            })  
    })

    it('pegando o titulo do artigo', function(){
        cy.get('article').find('h1').should('have.text', 'História do Mascote do Android')
    })

    it.only('pegar uma tag dentro de outra e usar o contains', function(){
        const nomeTest = 'Deivid'
        cy.contains('p strong', 'Android').invoke('text', nomeTest)
        //cy.get('p').find('strong').contains('Android')
    })
})

