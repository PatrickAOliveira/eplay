import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.media.thumbnail} alt={i.name} />
              <div>
                <h3>{i.name}</h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
                <span>{formatPrice(i.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(i.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
