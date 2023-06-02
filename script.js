
function fetchRandomEmoji() {
    return new Promise((resolve, reject) => {
      fetch('https://emojihub.yurace.pro/api/random')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch emoji');
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
 
  function displayEmoji(emoji) {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = `<span class="emoji">${emoji.htmlCode[0]}</span>`;
  }
  
  
  document.getElementById('randomButton').addEventListener('click', () => {
 
    fetchRandomEmoji()
      .then((data) => {
        displayEmoji(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
  function fetchAllEmojis() {
    return new Promise((resolve, reject) => {
      fetch('https://emojihub.yurace.pro/api/all')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch emojis');
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  
  
  
  