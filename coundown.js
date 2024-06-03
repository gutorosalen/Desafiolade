const dia = window.document.getElementById("dia");
const hora = window.document.getElementById("hora");
const minuto = window.document.getElementById("min");
const segundo = window.document.getElementById("seg");
const data = "22 dec 2024";

function countdown() {
  const datafinal = new Date(data);
  const hoje = new Date();
  const milsegtotal = (datafinal - hoje) / 1000;

  const finalDias = Math.floor(milsegtotal / 60 / 60 / 24);
  const finalHoras = Math.floor(milsegtotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(milsegtotal / 60) % 60;
  const finalSegundos = Math.floor(milsegtotal) % 60;

  /* imprimindo o resultado em cada ID*/
  dia.innerHTML = finalDias;
  hora.innerHTML = formatotempo(finalHoras, "H");
  minuto.innerHTML = formatotempo(finalMinutos, "M");
  segundo.innerHTML = formatotempo(finalSegundos, "S");
}

countdown(); /*Aqui é para a função ser executada*/
setInterval(countdown, 1000); /*Setar o intervalo a cada milésimo de segundos */

function formatotempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
} /*Essa função funciona assim: esse tempo é menor que 10? se for contatenar 0( por o zero na frente) com tempo se não volta tempo normal */
