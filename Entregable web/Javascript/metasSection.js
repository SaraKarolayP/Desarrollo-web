const createMetasSection = () => {

    const metasSection = document.createElement('section');
    metasSection.id = 'metas';
    metasSection.style.padding = '20px 15px';
    metasSection.style.minWidth = '300px';

    const metasTitle = document.createElement('h1');
    metasTitle.className = 'profile__titulogoals';
    metasTitle.innerHTML = '<p>Goals</p>';
    const goals = [
      'Master new programming languages',
      'Contribute to open-source projects',
      'Strive for work-life balance'
    ];
    const goalsList = document.createElement('ul');
    goals.forEach(goal => {
      const listItem = document.createElement('li');
      listItem.className = 'profile__goals';
      listItem.textContent = goal;
      goalsList.appendChild(listItem);
    });
    metasSection.appendChild(metasTitle);
    metasSection.appendChild(goalsList);

    metasSection.style.position = 'relative';
    metasSection.style.left = '0';


    return metasSection;
  };
  
  export default createMetasSection;
  
 