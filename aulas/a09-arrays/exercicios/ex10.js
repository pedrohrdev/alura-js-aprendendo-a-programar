/*
10. Lista de tarefas
Crie dois arrays:

um array com nomes de tarefas
outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
Exiba a lista de tarefas pendentes no console.
*/

const nomeTarefas = ['Estudar 3h de programacao', 'Estudar 1hr de ingles', 'Ler pelomenos 30 paginas'];
const tarefas = [true, false, false];

const tarefasPendentes = nomeTarefas.filter((tarefa, index) => {
    return !tarefas[index];
});

console.log(tarefasPendentes);