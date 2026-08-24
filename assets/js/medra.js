/* ── TICKER LEFT→RIGHT ── */
const PARTNERS=[
  'AIE – Assoc. Italiana Editori','Springer Nature','De Gruyter','Il Mulino',
  'Hoepli','Mondadori Libri','EDRA S.p.A.','FrancoAngeli','Feltrinelli',
  'Zanichelli','Carocci Editore','Laterza','Bollati Boringhieri','UTET Giuridica',
  'Vita e Pensiero','Sinaweb','ARDITO Project','CrossRef','IDF – Int\'l DOI Foundation','Donzelli',
];
const tt=document.getElementById('tt');
const mkItems=()=>PARTNERS.map(p=>{
  const d=document.createElement('div');d.className='ti';
  const dot=document.createElement('div');dot.className='ti-dot';
  d.appendChild(dot);d.appendChild(document.createTextNode(p));return d;
});
mkItems().forEach(el=>tt.appendChild(el));
mkItems().forEach(el=>tt.appendChild(el));