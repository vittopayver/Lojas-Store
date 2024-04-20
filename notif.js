  // Lista de nomes de pessoas que compraram algo
  var nomes = 
  ["Alguém Comprou 100 +10", 
  "Alguém Comprou 310 +31", 
  "Alguém Comprou 520 +52", 
  "Alguém Comprou 1060 +106", 
  "Alguém Comprou 2180 +218", 
  "Alguém Comprou 5600 +560"];

  // Função para exibir uma notificação com nome aleatório a cada 10 segundos
  function mostrarNotificacao() {
    var nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    var mensagem = nomeAleatorio + " Diamantes e Ganhou 10% de Bônus";
    var notificationElement = document.getElementById("notification");
    notificationElement.textContent = mensagem;
    notificationElement.style.display = "block";
    setTimeout(function() {
      notificationElement.style.display = "none";
    }, 8000); // Ajuste o tempo de exibição da notificação aqui (em milissegundos)
  }

  // Chamar a função inicialmente
  mostrarNotificacao();

  // Chamar a função a cada 10 segundos
  setInterval(mostrarNotificacao, 15000); // 10 segundos em milissegundos