const menuBtn = document.querySelector('.menu_button');
const closeBtn = document.querySelector('.close_button');
function openCloseDrawer() {
  const menuDrawer = document.querySelector('.open_nav');
  menuDrawer.classList.toggle('show_drawer');
  menuBtn.classList.toggle('show_drawer');
  closeBtn.classList.toggle('show_drawer');
}

menuBtn.addEventListener('click', openCloseDrawer);
closeBtn.addEventListener('click', openCloseDrawer);

const speakers = [{
  name: 'Grant Gustin',
  short_description: 'Thomas Grant Gustin is an American actor and singer.',
  description: `He is best known for his roles as Barry Allen / The Flash on the CW series The Flash as	part of the Arrowverse television franchise, and for his role as Sebastian Smythe on the Fox series Glee`,
  image: './src/grant.jfif',
},
{
  name: 'Stephen Amell',
  short_description: 'Stephen Adam Amell is a Canadian actor.',
  description: `He came to prominence for playing the lead role of Oliver Queen on The CW superhero series Arrow.`,
  image: './src/stephen.jpg',
},
{
  name: 'Tom Cavanagh',
  short_description: 'Thomas Cavanagh is a Canadian actor.',
  description: `He is known for a variety of roles on American television, including starring roles in Ed, Love Monkey and Trust Me, and recurring roles on Providence and Scrubs`,
  image: './src/tom.jfif',
  },
{
  name: 'Carlos Valdes',
  short_description: 'Carlos David Valdes is a Colombian-American actor and singer.',
  description: ` He is best known for his role as Cisco Ramon / Vibe on The CW television series The Flash and other Arrowverse-related projects.`,
  image: './src/cisco.jfif',
  },
{
  name: 'Candice Patton',
  short_description: 'Candice Kristina Patton is an American actress.',
  description: `She is best known for her role as Iris West-Allen in the television series The Flash, which earned her a Saturn Award from four nominations.`,
  image: './src/candice.jfif',
  },
{
  name: 'Danielle Panabaker',
  short_description: 'Danielle Nicole Panabaker is an American actress.',
  description: `She began acting as a teenager and came to prominence for her roles in the Disney films Stuck in the Suburbs, Sky High and Read It and Weep, and in the HBO miniseries Empire Falls.`,
  image: './src/dan.jpg',
},
];

const styleImagesList = ['./src/flash_1.png', './src/flash_2.png','']

function createSpeakers() {
  const speakersList = document.getElementById('speakers_list');
  for (let i = 0; i < (window.screen.width > 768? speakers.length:3); i += 1){
    const s = speakers[i];
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker_card');
    const speakerAvatar = document.createElement('div');
    speakerAvatar.classList.add('speaker_avatar');
    speakerAvatar.style.backgroundImage = `url(${s.image})`;
    const boltIcon = document.createElement('i');
    boltIcon.classList.add('material-icons', 'bolt_gold');
    const iconType = document.createTextNode('bolt');
    boltIcon.appendChild(iconType);
    speakerAvatar.appendChild(boltIcon);
    speakerCard.appendChild(speakerAvatar);
    const speakerInfoCard = document.createElement('div');
    speakerInfoCard.classList.add('speaker_info_card');
    const speakerName = document.createElement('h3');
    const nameText = document.createTextNode(s.name);
    speakerName.appendChild(nameText);
    speakerInfoCard.appendChild(speakerName);
    const shortIntro = document.createElement('p');
    shortIntro.classList.add('short_intro');
    const introText = document.createTextNode(s.short_description);
    shortIntro.appendChild(introText);
    speakerInfoCard.appendChild(shortIntro);
    const description = document.createElement('p');
    const descText = document.createTextNode(s.description);
    description.appendChild(descText);
    speakerInfoCard.appendChild(description);
    speakerCard.appendChild(speakerInfoCard);
    speakersList.appendChild(speakerCard);
  }

}

createSpeakers();
function updateSpeakerList(){
  const speakersList = document.getElementById('speakers_list');
  speakersList.replaceChildren();
  createSpeakers();; 
}
window.addEventListener('resize',updateSpeakerList);