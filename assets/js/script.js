const quiz = [
    { question: "O que é o Braille?", options: ["Um tipo de fonte usada em computadores", " Um sistema de leitura e escrita tátil para pessoas com deficiência visual", "Um dispositivo eletrônico que amplia textos", "Uma técnica de cirurgia para corrigir problemas de visão"], answer: 1 },
    { question: "Qual é a principal causa de cegueira evitável no mundo?", options: ["Diabetes", "Catarata", "Glaucoma", "Denegração macular"], answer: 1 },
    { question: "O que é um cão-guia?", options: [" Um cachorro treinado para ajudar pessoas com deficiência visual a se locomover com segurança", "Um dispositivo eletrônico que emite sons para guiar pessoas cegas", "Um tipo de bengala usada por pessoas com deficiência visual", "Um tipo de bengala usada por pessoas com deficiência visual"], answer: 0 },
    { question: "O que é baixa visão?", options: ["A completa ausência de visão", "Um tipo de daltonismo", "Uma doença que causa dor nos olhos", "Uma condição em que a pessoa tem alguma visão útil, mas não enxerga bem mesmo com óculos"], answer: 3 },
    { question: "Qual é o nome do inventor do sistema Braille?", options: [" Louis Braille", " Helen Keller", " Charles Braille", "Samuel Howe Braille"], answer: 0 },
    { question: "O que é uma bengala branca?", options: ["Um acessório principalmente de moda", " Um dispositivo usado por pessoas com deficiência visual para detectar obstáculos", "Um tipo de cão-guia", "Um símbolo de protesto"], answer: 1 },
    { question: "O que é o daltonismo?", options: ["Uma condição em que a pessoa não enxerga cores", " Uma deficiência visual que causa visão embaçada", "Uma condição em que a pessoa tem dificuldade para distinguir certas cores", "Uma doença que causa cegueira noturna"], answer: 2 },
    { question: "Qual é o objetivo do Dia Mundial da Visão?", options: ["Celebrar a invenção dos óculos", " Promover o uso de cães-guias", "Conscientizar sobre a importância da saúde ocular e prevenir a cegueira", "Arrecadar fundos para cirurgias de catarata"], answer: 2 },
    { question: "O que é um leitor de tela?", options: [" Um dispositivo que amplia textos em livros", "Um tipo de óculos que ajuda na leitura", "Um aplicativo que traduz textos para Braille", "Um software que converte texto em áudio para pessoas com deficiência visual"], answer: 3 },
    { question: "O que é retinose pigmentar?", options: ["Uma infecção nos olhos", " Um tipo de catarata", "Uma inflamação da retina", "Uma doença genética que causa perda progressiva da visão."], answer: 3 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("next-btn").style.display = "none";
    const questionData = quiz[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const correctIndex = quiz[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");
    options.forEach((opt, idx) => {
        if (idx === correctIndex) {
            opt.classList.add("correct");
        }
        if (idx === selectedIndex && selectedIndex !== correctIndex) {
            opt.classList.add("incorrect");
        }
        opt.onclick = null;
    });
    if (selectedIndex === correctIndex) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz concluído!";
        document.getElementById("options").innerHTML = `<h3>Você acertou ${score}/${quiz.length} perguntas!</h3>`;
        document.getElementById("next-btn").style.display = "none";

        // Cria e exibe o botão com o link
        const linkBtn = document.createElement("button");
        linkBtn.innerText = "Reiniciar o quiz"; // Texto do botão
        linkBtn.classList.add("option"); // Aplica o estilo do botão
        linkBtn.style.marginTop = "20px"; // Adiciona um espaçamento

        linkBtn.addEventListener("click", () => {
            window.location.href = "quiz.html"; 
        });

        document.querySelector(".question-box").appendChild(linkBtn);
    }
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("question").innerText = "Pergunta aqui...";
    document.getElementById("options").innerHTML = "";
    document.getElementById("restart-btn").remove(); 
    
    loadQuestion();
}

loadQuestion();

function voltarParaInicio() {
    window.location.href = "index.html"; 
}