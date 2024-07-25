import { Box, Button, styled, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import contato from '../../assets/img/contato.png'
import AoEnviarForm from '../../service/AoEnviarForm'
import { Fade } from "react-awesome-reveal"
import ValidationContext from '../ValidationContext/ValidationContext'



const ContainerFaleConosco = styled(Box)(({ theme }) => ({
    backgroundColor: 'var(--faleConoscoSecBg-color)',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '3rem 0 ',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',

    [theme.breakpoints.down(900)]: {
        padding: '4rem 1rem  ',
    },

    [theme.breakpoints.down('sm')]: {
        padding: '1rem',
    }
}))

const Titulo = styled('h2')(({ theme }) => ({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#000 ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',

    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '2rem',
    }
}))

const BoxFaleConosco = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '60%',
    alignItems: 'space-between',
    justifyContent: 'center',
    gap: '2rem',

    [theme.breakpoints.down(900)]: {
        width: '90%',
    },

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',

        width: '100%',
    }
}))

const Img = styled('img')((({ theme }) => ({
    [theme.breakpoints.down(900)]: {
        width: '50%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '70%',
        height: '300px'
    }
})))

const FormFaleC = styled('form')((({ theme }) => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',

    [theme.breakpoints.down(900)]: {
        width: '80%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
})))

const FaleConosco = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [celphone, setCelphone] = useState<number | undefined>()
    const [message, setMessage] = useState<string>('')


    const { nome, emailV, telefone, servico } = useContext(ValidationContext)


    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const nomeValido = nome(name)
        const emailValido = emailV(email)
        const telefoneValido = telefone(celphone || 0)
        const servicoValido = servico(message)
    
        let mensagemErro = '';
        if (!nomeValido.valido) {
            mensagemErro += `Nome: ${nomeValido.texto}\n`;
        }
        if (!emailValido.valido) {
            mensagemErro += `E-mail: ${emailValido.texto}\n`;
        }
        if (!telefoneValido.valido) {
            mensagemErro += `Telefone: ${telefoneValido.texto}\n`;
        }
        if (!servicoValido.valido) {
            mensagemErro += `Serviço: ${servicoValido.texto}\n`;
        }

        // Exibir a mensagem de erro, se houver
        if (mensagemErro) {
            alert(`Corrija os seguintes erros:\n${mensagemErro}`);
            return;
        }
        
        const dados = {
            nome: name,
            email: email,
            telefone: celphone || 0,
            servico: message,
            data: new Date().toISOString()
        }
        const enviar = AoEnviarForm(dados)
        await enviar
        alert('Mensagem enviada com sucesso!')
        setName('')
        setEmail('')
        setCelphone(undefined)
        setMessage('')
    }

    return (
        <Fade duration={2000}>
            <ContainerFaleConosco id='contato'>
                <Titulo>Fale Conosco</Titulo>
                <BoxFaleConosco >
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
                                label="Serviço"
                                required
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Button type="submit" variant="contained" color="info" style={{ marginTop: '1rem' }}>
                            Enviar
                        </Button>
                    </FormFaleC>
                    <Img src={contato} alt='Imagem contato' />
                </BoxFaleConosco>
            </ContainerFaleConosco>
        </Fade>

    )
}

export default FaleConosco
