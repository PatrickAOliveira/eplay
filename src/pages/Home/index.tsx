import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa23.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'PS5',
    infos: ['10%', 'R$ 199,90'],
    image: resident
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Windows',
    infos: ['10%', 'R$ 199,90'],
    image: fifa
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Windows',
    infos: ['10%', 'R$ 199,90'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: zelda
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Switch',
    infos: ['05/04'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
