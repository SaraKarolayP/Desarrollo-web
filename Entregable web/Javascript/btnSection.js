const createBtnSection = () => {
    const btnSection = document.createElement('section');
    const btnNames = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];
    btnNames.forEach(name => {
      const btn = document.createElement('button');
      btn.className = 'profile__btn';
      btn.innerHTML = `<p>${name}</p>`;
      btn.className = 'profile__btn';
      btn.innerHTML = `<p>${name}</p>`;
      btn.style.margin = '5px';
      btn.style.marginBottom = '20px';
      btn.style.padding = '10px';
      btn.style.border = 'none';
      btn.style.borderRadius = '5px';
      btn.style.cursor = 'pointer';

        // Estilo botones
        if (name === 'GitHub') {
          btn.style.backgroundColor = 'hsl(357, 50%, 50%)';
          btn.style.color = '#fff';
      }

      else if (name === 'Frontend Mentor') {
          btn.style.color = 'rgb(0, 0, 0)';
          btn.style.backgroundColor = 'hsl(197, 60%, 45%)';
      }
  
      else if (name === 'LinkedIn') {
          btn.style.backgroundColor = 'hsl(0, 97%, 61%)';
          btn.style.color = '#fff';
      }

      else if (name === 'Twitter') {
          btn.style.backgroundColor = 'hsl(66, 97%, 61%)';
          btn.style.color = '#000000';
      }
  
      else if (name === 'Instagram') {
          btn.style.color = 'rgb(250, 250, 250)';
          btn.style.backgroundColor = 'hsl(249, 65%, 42%)';
      }
      btnSection.appendChild(btn);
    });
    return btnSection;
  };
  
  export default createBtnSection;
  
  