let tarefas = [
    { id: 1, texto: 'Estudar Node', coluna: 'afazer', prioridade: 'alta', usuarioId: 1 },
    { id: 2, texto: 'Estudar React', coluna: 'andamento', prioridade: 'media', usuarioId: 2 },
    { id: 3, texto: 'Estudar HTML', coluna: 'andamento', prioridade: 'baixa', usuarioId: 3 },
];

let proximoIdTarefa = 4;

module.exports = {
    listar: () => tarefas,

    listarPorColuna: (coluna) => tarefas.filter(t => t.coluna === coluna),
    buscar: (id) => tarefas.find(t => t.id === id),

    adicionar: ({ texto, prioridade, coluna }) => {
    const nova = { id: proximoIdTarefa++, texto,
      prioridade: prioridade || 'media',
      coluna: coluna || 'afazer' };
    tarefas.push(nova);
    return nova;
    },

    atualizar: (id, dados) => {
        const idx = tarefas.findIndex(t => t.id === id);
        if (idx === -1) return null;
        tarefas[idx] = { ...tarefas[idx], ...dados, id };
        return tarefas[idx];
    },
    
    remover: (id) => {
        const idx = tarefas.findIndex(t => t.id === id);
        if (idx === -1) return null;
        return tarefas.splice(idx, 1)[0];
    },
};