import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let música = 'rock alternativo'
let bandas = ['Pierce The Veil', 'My Chemical Romance', 'Evanescence', 'Nirvana']

Deno.test("teste de assert", () => {
    assertEquals(música, 'rock alternativo');
    assertStringIncludes(música, "rock");
})

Deno.test("Teste de Array", ()=> {
    assertArrayIncludes(bandas,
        ["Evanescence", "My Chemical Romance", "Bring me The Horizon"],
        "Opa! Algo deu errado!");
})