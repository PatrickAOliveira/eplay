import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto nam
      labore autem. Ullam molestiae fugiat labore quo laborum culpa aspernatur,
      voluptatibus fugit, eos a vero! Necessitatibus tempore cum non?
    </Descricao>
  </Card>
)

export default Product
