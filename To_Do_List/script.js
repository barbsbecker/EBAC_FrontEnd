//$(seletor).ação();

$(document).ready(function() {
    $('button').click(function(e) {
       e.preventDefault();
       const tarefaToDo = $('#tarefa').val();
       
 
       if (tarefaToDo.trim() !== '') { 
          const novaTarefa = $('<li class="atividades-items"></li>').text(tarefaToDo); 
 
          $('ul').append(novaTarefa); // Adiciona o novo item à lista
          $('#tarefa').val('');
 
          $(novaTarefa).click(function() {
             $(this).toggleClass('riscado')
          })
       }
    })
 })