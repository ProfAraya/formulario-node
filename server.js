const express = require('express');
const app = express();
const path = require('path');

// Configurar pasta public para arquivos estáticos
app.use(express.static('public'));

// Rota para tratar o formulário
app.get('/trata-formulario', (req, res) => {
    // Obter os dados do formulário da query string
    const { nome, curso, semestre } = req.query;

    // Criar um objeto com os dados do curso
    const cursos = {
        'ADS': 'Análise e Desenvolvimento de Sistemas',
        'BD': 'Banco de Dados',
        'SI': 'Segurança da Informação',
        'TI': 'Tecnologia da Informação'
    };

    // Criar resposta HTML
    const resposta = `
        <h1>Dados Recebidos</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Curso:</strong> ${cursos[curso]}</p>
        <p><strong>Semestre:</strong> ${semestre}º</p>
        <br>
        <a href="/">Voltar</a>
    `;

    res.send(resposta);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});