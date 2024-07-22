import { styled } from '@mui/material'

type Props = {
    rotate: number
    color: string
}

const Circulo = styled('span')<Props>(({ rotate, color}) => ({
    border:`1px solid  ${color}`,
    height: '230px',
    width: '480px',
    borderRadius: '100%',
    transform:`rotate(${rotate}deg)`,
    position:'absolute',
    
}))

const CirculoOval = (props: Props) => {
  return (
    <Circulo rotate={props.rotate} color={props.color}/>
  )
}

export default CirculoOval
