const createProfileSection = () => {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.src = '/img/mujer.jpg';
    img.alt = 'Jessica Randall - profile photo';
    img.className = 'profile__avatar';
    img.style.borderRadius = '50%';
    img.style.width = '250px';
    img.style.height = '250px';
    img.style.margin = '15px auto';
    img.style.boxShadow = '0 0 0 10px rgb(0, 119, 255)';

    const name = document.createElement('h1');
    name.className = 'profile__name';
    name.innerHTML = '<p>Jessica Randall</p>';
    name.style.fontSize = '2.2rem';
    name.style.textAlign = 'left';

    const city = document.createElement('p');
    city.className = 'profile__city';
    city.textContent = 'London, United Kingdom';
    city.style.textAlign = 'left';
    city.style.textDecorationLine = 'underline';

    const description = document.createElement('p');
    description.className = 'profile__description';
    description.textContent = '"Front-end developer and avid reader."';
    section.appendChild(img);
    section.appendChild(name);
    section.appendChild(city);
    section.appendChild(description);
    return section;
  };
  
  export default createProfileSection;


  
  