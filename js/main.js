window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('[data-js="words"]');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }

    if(transcript.includes('dog')) {
      const gif = `
        <h2 class="easteregg__title">Dogs are awesome! <3</h2>
        <img class="easteregg__img" src="https://i.giphy.com/media/mokQK7oyiR8Sk/giphy.webp" alt="Cute doggos"/>
      `;
      words.innerHTML = gif;
    }

    if(transcript.includes('cat')) {
      const gif = `
        <h2 class="easteregg__title">Cats are awesome! <3</h2>
        <img class="easteregg__img" src="https://heavyeditorial.files.wordpress.com/2012/08/roomba-cat-vs-dog.gif?w=780" alt="Cute doggos"/>
      `;
      words.innerHTML = gif;
    }


});

recognition.addEventListener('end', recognition.start);

recognition.start();
