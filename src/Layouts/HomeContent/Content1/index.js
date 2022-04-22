import React from "react";

function a(){
    return [
        <span>Esto es un titulo de prueba.</span>,
      "esto es una prueba para ver como estan los estilos css del component JSX que hice hoy en la madrugada",
    ]
}

export function Content1() {
   return [
      a(),
      `Esto es el codigo de la prueba, lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
   ];
}
