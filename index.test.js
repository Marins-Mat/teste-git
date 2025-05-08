import { saudacao  } from "./script.js";

test('deve retornar uma saudação com o nome' , () => {
    const resultado = saudacao('Mateus')

    expect(resultado).toBe('Olá, Mateu!')
})
    
