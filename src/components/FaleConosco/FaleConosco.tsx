import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState } from 'react'
import contato from '../../assets/img/contato.png'
type Props = {}

const ContainerFaleConosco = styled(Box)({
    backgroundColor: 'var(--faleConoscoSecBg-color)',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius:'5px',
    margin: '3rem 0 ',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',

})

const Titulo = styled('h2')({
    marginTop:0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#000 ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    
})

const FormFaleC = styled(Box)({

    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
})


const FaleConosco = (props: Props) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [celphone, setCelphone] = useState<number | undefined>()
    const [message, setMessage] = useState<string>('')

    
    function handleSubmit() {
    }

    return (
        <ContainerFaleConosco>
            <Titulo>Fale Conosco</Titulo>
            <Box display={'flex'} width={'60%'} alignItems={'space-between'} justifyContent={'center'} gap={'2rem'}>
                <FormFaleC onSubmit={handleSubmit}>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Seu telefone"
                            value={celphone || ''}
                            onChange={(e) => setCelphone(Number(e.target.value))}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginTop="1rem" >
                        <TextField
                            label="Descrição"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="info" style={{'marginTop':'1rem'}}>
                        Enviar
                    </Button>
                </FormFaleC>
                <img src={contato} alt='Imagem contato' />

            </Box>
        </ContainerFaleConosco>
    )
}

export default FaleConosco