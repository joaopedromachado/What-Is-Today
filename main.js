const mesesLista = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const diasLista = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

let h1 = document.getElementById("attDia");


setInterval(()=> {
   let dataPrincipal = new Date();
   let dia = diasLista[dataPrincipal.getDay()];
   let data = dataPrincipal.getDate();
   let mes = mesesLista[dataPrincipal.getMonth()];
   let ano = dataPrincipal.getFullYear();
   let hora = dataPrincipal.getHours();
   let minutos = dataPrincipal.getMinutes();
   let segundos = dataPrincipal.getSeconds();

   if(minutos.toString().length == 1) {
       minutos = `0${minutos}`;
   }

   if(segundos.toString().length == 1) {
       segundos = `0${segundos}`;
   }

   return (
       h1.innerHTML = `${dia}, dia ${data} de ${mes} de ${ano}.
       Horário ${hora}:${minutos}:${segundos}`
   )
}, );

