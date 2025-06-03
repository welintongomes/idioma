let phrases = [
    {
        id: 1,
        english: "I am a man, not a child.",
        portuguese: "Eu sou um homem, não uma criança.",
        difficulty: "médio",
        category: "frases-gerais"
    },
    {
        id: 2,
        english: "Apple",
        portuguese: "Maçã",
        difficulty: "fácil",
        category: "frutas"
    },
    {
        id: 3,
        english: "Dog",
        portuguese: "Cachorro",
        difficulty: "fácil",
        category: "animais"
    },

    // 🍌 Frutas
    {
        id: 4,
        english: "Banana",
        portuguese: "Banana",
        difficulty: "fácil",
        category: "frutas"
    },
    {
        id: 5,
        english: "She ate a juicy mango for breakfast.",
        portuguese: "Ela comeu uma manga suculenta no café da manhã.",
        difficulty: "médio",
        category: "frutas"
    },
    {
        id: 6,
        english: "The strawberries, although ripe, were sour and unappetizing.",
        portuguese: "Os morangos, embora maduros, estavam azedos e pouco apetitosos.",
        difficulty: "difícil",
        category: "frutas"
    },
    {
        id: 7,
        english: "Despite its unassuming appearance, the durian is considered the king of fruits in Southeast Asia.",
        portuguese: "Apesar de sua aparência modesta, o durião é considerado o rei das frutas no Sudeste Asiático.",
        difficulty: "extremo",
        category: "frutas"
    },

    // 🐶 Animais
    {
        id: 8,
        english: "Cat",
        portuguese: "Gato",
        difficulty: "fácil",
        category: "animais"
    },
    {
        id: 9,
        english: "The horse galloped across the field.",
        portuguese: "O cavalo galopou pelo campo.",
        difficulty: "médio",
        category: "animais"
    },
    {
        id: 10,
        english: "Chameleons change color to regulate their body temperature or communicate.",
        portuguese: "Camaleões mudam de cor para regular sua temperatura corporal ou se comunicar.",
        difficulty: "difícil",
        category: "animais"
    },
    {
        id: 11,
        english: "The endangered axolotl, native to Mexico, remains aquatic and retains its gills throughout its life.",
        portuguese: "O axolote ameaçado de extinção, nativo do México, permanece aquático e mantém suas guelras durante toda a vida.",
        difficulty: "extremo",
        category: "animais"
    },

    // 🎨 Cores
    {
        id: 12,
        english: "Red",
        portuguese: "Vermelho",
        difficulty: "fácil",
        category: "cores"
    },
    {
        id: 13,
        english: "Her dress is a beautiful shade of turquoise.",
        portuguese: "O vestido dela é um lindo tom de turquesa.",
        difficulty: "médio",
        category: "cores"
    },
    {
        id: 14,
        english: "Sepia tones evoke a nostalgic, vintage feel in photography.",
        portuguese: "Tons de sépia evocam uma sensação nostálgica e vintage na fotografia.",
        difficulty: "difícil",
        category: "cores"
    },
    {
        id: 15,
        english: "Ultramarine blue was once more valuable than gold due to its rarity and the complexity of its extraction.",
        portuguese: "O azul ultramarino já foi mais valioso que o ouro devido à sua raridade e à complexidade de sua extração.",
        difficulty: "extremo",
        category: "cores"
    },

    // 🔢 Números
    {
        id: 16,
        english: "One",
        portuguese: "Um",
        difficulty: "fácil",
        category: "números"
    },
    {
        id: 17,
        english: "I have five books on my desk.",
        portuguese: "Eu tenho cinco livros na minha mesa.",
        difficulty: "médio",
        category: "números"
    },
    {
        id: 18,
        english: "He calculated the sum of three-digit prime numbers.",
        portuguese: "Ele calculou a soma dos números primos de três dígitos.",
        difficulty: "difícil",
        category: "números"
    },
    {
        id: 19,
        english: "The Fibonacci sequence is an infinite series where each number is the sum of the two preceding ones.",
        portuguese: "A sequência de Fibonacci é uma série infinita em que cada número é a soma dos dois anteriores.",
        difficulty: "extremo",
        category: "números"
    },

    // 👨‍👩‍👧 Família
    {
        id: 20,
        english: "Mother",
        portuguese: "Mãe",
        difficulty: "fácil",
        category: "família"
    },
    {
        id: 21,
        english: "My uncle lives in Canada.",
        portuguese: "Meu tio mora no Canadá.",
        difficulty: "médio",
        category: "família"
    },
    {
        id: 22,
        english: "Her stepbrother is an aerospace engineer.",
        portuguese: "O meio-irmão dela é engenheiro aeroespacial.",
        difficulty: "difícil",
        category: "família"
    },
    {
        id: 23,
        english: "Despite their differences, the extended family gathered harmoniously for the reunion.",
        portuguese: "Apesar das diferenças, a família estendida se reuniu harmoniosamente para o reencontro.",
        difficulty: "extremo",
        category: "família"
    },

    // 🏠 Casa
    {
        id: 24,
        english: "Chair",
        portuguese: "Cadeira",
        difficulty: "fácil",
        category: "casa"
    },
    {
        id: 25,
        english: "She cleaned the kitchen thoroughly.",
        portuguese: "Ela limpou a cozinha completamente.",
        difficulty: "médio",
        category: "casa"
    },
    {
        id: 26,
        english: "The chandelier in the living room is made of Venetian crystal.",
        portuguese: "O lustre da sala de estar é feito de cristal veneziano.",
        difficulty: "difícil",
        category: "casa"
    },
    {
        id: 27,
        english: "Their sustainable house utilizes solar panels, rainwater collection, and smart automation.",
        portuguese: "A casa sustentável deles utiliza painéis solares, coleta de água da chuva e automação inteligente.",
        difficulty: "extremo",
        category: "casa"
    },

    // 🍽️ Comida
    {
        id: 28,
        english: "Bread",
        portuguese: "Pão",
        difficulty: "fácil",
        category: "comida"
    },
    {
        id: 29,
        english: "I cooked rice and beans for lunch.",
        portuguese: "Cozinhei arroz e feijão para o almoço.",
        difficulty: "médio",
        category: "comida"
    },
    {
        id: 30,
        english: "He seasoned the steak with rosemary and garlic before grilling.",
        portuguese: "Ele temperou o bife com alecrim e alho antes de grelhar.",
        difficulty: "difícil",
        category: "comida"
    },
    {
        id: 31,
        english: "This traditional dish blends local spices, marinated meat, and fermented grains over hours of slow cooking.",
        portuguese: "Este prato tradicional combina especiarias locais, carne marinada e grãos fermentados ao longo de horas de cozimento lento.",
        difficulty: "extremo",
        category: "comida"
    }
];
// ADICIONAR após o array phrases:
const DIFFICULTIES = ['fácil', 'médio', 'difícil', 'extremo'];
const CATEGORIES = {
    'frutas': 'Frutas',
    'animais': 'Animais',
    'cores': 'Cores',
    'números': 'Números',
    'família': 'Família',
    'casa': 'Casa',
    'comida': 'Comida',
    'frases-gerais': 'Frases Gerais'
};
//variáveis úteis
let gameState = {
    availableQuestions: [],
    currentQuestion: null,
    selectedWords: [],
    score: 0,
    totalQuestions: 0,
    currentQuestionNum: 0,
    gameActive: false
};
let editingId = null;
//fim variáveis úteis

// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        if (targetTab === 'manage') {
            loadPhrasesList();
        }
    });
});

// Speech synthesis functions
function speak(text, lang) {
    if (!document.getElementById('enableVoice').checked) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateGameStatus() {
    document.getElementById('currentScore').textContent = gameState.score;
    document.getElementById('totalQuestions').textContent = gameState.totalQuestions;
    document.getElementById('currentQuestionNum').textContent = gameState.currentQuestionNum;
    document.getElementById('totalPhrases').textContent = phrases.length;
    document.getElementById('remainingQuestions').textContent = gameState.availableQuestions.length;
}

// FUNÇÃO 1: Inicializar dropdowns
function initializeDropdowns() {
    const categorySelect = document.getElementById('categorySelect');
    const difficultySelect = document.getElementById('difficultySelect');
    const categorySelect2 = document.getElementById('categorySelect2');
    const difficultySelect2 = document.getElementById('difficultySelect2');
    
    // Preencher categorias
    Object.keys(CATEGORIES).forEach(key => {
        const option1 = new Option(CATEGORIES[key], key);
        const option2 = new Option(CATEGORIES[key], key);
        categorySelect.add(option1);
        categorySelect2.add(option2);
    });
    
    // Preencher dificuldades
    DIFFICULTIES.forEach(difficulty => {
        const option1 = new Option(difficulty.charAt(0).toUpperCase() + difficulty.slice(1), difficulty);
        const option2 = new Option(difficulty.charAt(0).toUpperCase() + difficulty.slice(1), difficulty);
        difficultySelect.add(option1);
        difficultySelect2.add(option2);
    });
}

// FUNÇÃO 2: Filtrar frases baseado na seleção
function getFilteredPhrases() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const selectedDifficulty = document.getElementById('difficultySelect').value;
    
    return phrases.filter(phrase => {
        const categoryMatch = selectedCategory === 'all' || phrase.category === selectedCategory;
        const difficultyMatch = selectedDifficulty === 'all' || phrase.difficulty === selectedDifficulty;
        return categoryMatch && difficultyMatch;
    });
}

// Game functions
function startGame() {
    const filteredPhrases = getFilteredPhrases();
    
    if (phrases.length === 0) {
        alert('Adicione algumas frases primeiro na aba "Gerenciar Frases"');
        return;
    }
    
    if (filteredPhrases.length === 0) {
        alert('Nenhuma frase encontrada com os filtros selecionados. Tente outras opções.');
        return;
    }
    
    gameState = {
        availableQuestions: [...filteredPhrases],
        currentQuestion: null,
        selectedWords: [],
        score: 0,
        totalQuestions: 0,
        currentQuestionNum: 0,
        gameActive: true
    };
    
    updateGameStatus();
    nextQuestion();
}

function nextQuestion() {
    if (gameState.availableQuestions.length === 0) {
        endGame();
        return;
    }

    // Get random question from available questions
    const randomIndex = Math.floor(Math.random() * gameState.availableQuestions.length);
    gameState.currentQuestion = gameState.availableQuestions[randomIndex];
    gameState.availableQuestions.splice(randomIndex, 1);

    gameState.totalQuestions++;
    gameState.currentQuestionNum++;
    gameState.selectedWords = [];

    updateGameStatus();
    renderQuestion();
    hideFeedback();

    // Show reset button
    document.getElementById('resetBtn').style.display = 'inline-block';
}

function renderQuestion() {
    const words = gameState.currentQuestion.portuguese.split(' ');
    const shuffledWords = shuffleArray(words);

    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `
                <div class="question">Qual o significado de:</div>
                <div class="english-phrase">"${gameState.currentQuestion.english}"</div>
                
                <div class="answer-area">
                    <h4>🎯 Monte a tradução na ordem correta:</h4>
                    <div class="selected-words empty" id="selectedWordsArea">
                        Clique nas palavras abaixo para formar a frase
                    </div>
                    
                    <div class="word-buttons" id="wordButtons">
                        ${shuffledWords.map((word, index) => `
                            <button class="word-btn" onclick="selectWord('${word}', ${index})" id="word-${index}">
                                ${word}
                            </button>
                        `).join('')}
                    </div>
                    
                    <div class="game-actions">
                        <button class="btn" onclick="checkAnswer()" id="checkBtn">✅ Verificar Resposta</button>
                        <button class="btn btn-secondary" onclick="showAnswer()">👁️ Ver Resposta</button>
                        <button class="btn btn-secondary" onclick="clearSelection()">🗑️ Limpar</button>
                    </div>
                </div>
            `;

    // Speak the question
    setTimeout(() => {
        speak("Qual o significado de", 'pt');
        setTimeout(() => {
            speak(gameState.currentQuestion.english, 'en');
        }, 1500);
    }, 500);
}

function selectWord(word, buttonIndex) {
    const button = document.getElementById(`word-${buttonIndex}`);
    if (button.disabled) return;

    gameState.selectedWords.push(word);
    button.disabled = true;

    updateSelectedWordsDisplay();
}

function removeSelectedWord(wordIndex) {
    const word = gameState.selectedWords[wordIndex];
    gameState.selectedWords.splice(wordIndex, 1);

    // Re-enable the button
    const buttons = document.querySelectorAll('.word-btn');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === word && btn.disabled) {
            btn.disabled = false;
            return;
        }
    });

    updateSelectedWordsDisplay();
}

function updateSelectedWordsDisplay() {
    const selectedWordsArea = document.getElementById('selectedWordsArea');

    if (gameState.selectedWords.length === 0) {
        selectedWordsArea.innerHTML = 'Clique nas palavras abaixo para formar a frase';
        selectedWordsArea.className = 'selected-words empty';
    } else {
        selectedWordsArea.innerHTML = gameState.selectedWords.map((word, index) =>
            `<button class="selected-word" onclick="removeSelectedWord(${index})">${word}</button>`
        ).join('');
        selectedWordsArea.className = 'selected-words has-words';
    }
}

function clearSelection() {
    gameState.selectedWords = [];

    // Re-enable all buttons
    const buttons = document.querySelectorAll('.word-btn');
    buttons.forEach(btn => btn.disabled = false);

    updateSelectedWordsDisplay();
}

function checkAnswer() {
    if (gameState.selectedWords.length === 0) {
        alert('Selecione algumas palavras primeiro!');
        return;
    }

    const userAnswer = gameState.selectedWords.join(' ').toLowerCase().trim();
    const correctAnswer = gameState.currentQuestion.portuguese.toLowerCase().trim();

    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        gameState.score++;
        showFeedback('🎉 Perfeito! Você acertou!', 'correct');
        speak('Perfeito! Você acertou!', 'pt');

        // Disable all buttons
        const buttons = document.querySelectorAll('.word-btn');
        buttons.forEach(btn => btn.disabled = true);

        // Auto proceed to next question after 2 seconds
        setTimeout(() => {
            if (gameState.availableQuestions.length > 0) {
                nextQuestion();
            } else {
                endGame();
            }
        }, 2000);

    } else {
        showFeedback(`❌ Incorreto! A resposta correta é: "${gameState.currentQuestion.portuguese}"`, 'incorrect');
        speak('Incorreto. A resposta correta é:', 'pt');
        setTimeout(() => {
            speak(gameState.currentQuestion.portuguese, 'pt');
        }, 1500);
    }

    updateGameStatus();
}

function showAnswer() {
    showFeedback(`💡 A resposta é: "${gameState.currentQuestion.portuguese}"`, 'correct');
    speak('A resposta é:', 'pt');
    setTimeout(() => {
        speak(gameState.currentQuestion.portuguese, 'pt');
    }, 1000);

    // Show correct order
    gameState.selectedWords = gameState.currentQuestion.portuguese.split(' ');
    updateSelectedWordsDisplay();

    // Disable all word buttons
    const buttons = document.querySelectorAll('.word-btn');
    buttons.forEach(btn => btn.disabled = true);
}

function resetRound() {
    gameState.selectedWords = [];
    updateSelectedWordsDisplay();

    // Re-enable all buttons
    const buttons = document.querySelectorAll('.word-btn');
    buttons.forEach(btn => btn.disabled = false);

    hideFeedback();
}

function endGame() {
    const percentage = Math.round((gameState.score / gameState.totalQuestions) * 100);
    const gameContent = document.getElementById('gameContent');

    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excelente! Você é um mestre!';
    } else if (percentage >= 70) {
        message = '🎉 Muito bem! Continue assim!';
    } else if (percentage >= 50) {
        message = '👍 Bom trabalho! Pratique mais!';
    } else {
        message = '💪 Continue tentando! A prática leva à perfeição!';
    }

    gameContent.innerHTML = `
                <div class="game-complete">
                    <h2>🎮 Jogo Concluído!</h2>
                    <p>${message}</p>
                    <div style="font-size: 3rem; margin: 20px 0;">
                        ${gameState.score}/${gameState.totalQuestions}
                    </div>
                    <p style="font-size: 1.5rem; margin-bottom: 30px;">
                        ${percentage}% de acertos
                    </p>
                    <button class="btn" onclick="startGame()" style="font-size: 1.2rem; padding: 15px 30px;">
                        🔄 Jogar Novamente
                    </button>
                </div>
            `;

    document.getElementById('resetBtn').style.display = 'none';
    gameState.gameActive = false;

    speak(`Jogo concluído! Você acertou ${gameState.score} de ${gameState.totalQuestions} perguntas.`, 'pt');
}

function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
    feedback.style.display = 'block';
}

function hideFeedback() {
    document.getElementById('feedback').style.display = 'none';
}

// Phrase management functions
function loadPhrasesList() {
    const list = document.getElementById('phrasesList');

    if (phrases.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Nenhuma frase cadastrada. Adicione sua primeira frase!</p>';
        return;
    }

    list.innerHTML = phrases.map(phrase => `
    <div class="phrase-item">
        <div class="phrase-content">
            <div class="phrase-english">${phrase.english}</div>
            <div class="phrase-portuguese">${phrase.portuguese}</div>
            <!-- ADICIONAR ESTAS LINHAS: -->
            <div class="phrase-meta">
                <span class="category-badge">${CATEGORIES[phrase.category] || phrase.category}</span>
                <span class="difficulty-badge difficulty-${phrase.difficulty}">${phrase.difficulty}</span>
            </div>
        </div>
        <div class="phrase-actions">
            <button class="btn btn-secondary btn-small" onclick="editPhrase(${phrase.id})">✏️ Editar</button>
            <button class="btn btn-danger btn-small" onclick="deletePhrase(${phrase.id})">🗑️ Excluir</button>
        </div>
    </div>
`).join('');
}

function openAddModal() {
    editingId = null;
    document.getElementById('modalTitle').textContent = 'Adicionar Nova Frase';
    document.getElementById('englishPhrase').value = '';
    document.getElementById('portugueseTranslation').value = '';
    document.getElementById('phraseModal').style.display = 'block';
}

function editPhrase(id) {
    const phrase = phrases.find(p => p.id === id);
    if (!phrase) return;
    
    editingId = id;
    document.getElementById('modalTitle').textContent = 'Editar Frase';
    document.getElementById('englishPhrase').value = phrase.english;
    document.getElementById('portugueseTranslation').value = phrase.portuguese;
    // ADICIONAR ESTAS LINHAS:
    document.getElementById('categorySelect2').value = phrase.category || '';
    document.getElementById('difficultySelect2').value = phrase.difficulty || '';
    document.getElementById('phraseModal').style.display = 'block';
}

function deletePhrase(id) {
    if (confirm('Tem certeza que deseja excluir esta frase?')) {
        phrases = phrases.filter(p => p.id !== id);
        loadPhrasesList();
    }
}

function clearAllPhrases() {
    if (confirm('Tem certeza que deseja excluir todas as frases? Esta ação não pode ser desfeita.')) {
        phrases = [];
        loadPhrasesList();
    }
}

function closeModal() {
    document.getElementById('phraseModal').style.display = 'none';
}

// Form submission
document.getElementById('phraseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const englishPhrase = document.getElementById('englishPhrase').value.trim();
    const portugueseTranslation = document.getElementById('portugueseTranslation').value.trim();
    // ADICIONAR ESTAS LINHAS:
    const category = document.getElementById('categorySelect2').value;
    const difficulty = document.getElementById('difficultySelect2').value;
    
    if (!englishPhrase || !portugueseTranslation || !category || !difficulty) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (editingId) {
        const phrase = phrases.find(p => p.id === editingId);
        if (phrase) {
            phrase.english = englishPhrase;
            phrase.portuguese = portugueseTranslation;
            // ADICIONAR ESTAS LINHAS:
            phrase.category = category;
            phrase.difficulty = difficulty;
        }
    } else {
        const newId = Math.max(...phrases.map(p => p.id), 0) + 1;
        phrases.push({
            id: newId,
            english: englishPhrase,
            portuguese: portugueseTranslation,
            // ADICIONAR ESTAS LINHAS:
            category: category,
            difficulty: difficulty
        });
    }
    
    closeModal();
    loadPhrasesList();
});

// Initialize
// Initialize
initializeDropdowns();
loadPhrasesList();
updateGameStatus();