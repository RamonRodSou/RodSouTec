import { Alert, Box, Button, styled, TextField } from '@mui/material'
import { FormEvent, useState } from 'react'
import contato from '../../assets/img/contato.png'
import { Fade } from "react-awesome-reveal"
import { SendFormToN8n } from '@service/N8NConection'
import { Person } from '@domain/Person'
import { sanitize, validateForm } from '@utils/validate'
import { StringUtil } from '@utils/string'
import { Errors } from '@utils/IError'

const ContainerFaleConosco = styled(Box)(({ theme }) => ({
    backgroundColor: 'var(--faleConoscoSecBg-color)',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '3rem 0 ',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',

    [theme.breakpoints.down(970)]: {
        padding: '1rem',
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

    [theme.breakpoints.down(970)]: {
        width: '90%',
    },

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',

        width: '100%',
    }
}))

const Img = styled('img')((({ theme }) => ({
    [theme.breakpoints.down(970)]: {
        width: '50%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '70%',
        height: '300px'
    }
})))

const FormSubmit = styled('form')((({ theme }) => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',

    [theme.breakpoints.down(970)]: {
        width: '80%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
})))

const FaleConosco = () => {
    const [form, setForm] = useState<Person>(new Person);
    const [loading, setLoading] = useState<boolean>(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null)
    const [errors, setErrors] = useState<Errors>({});

    function handleChange(field: keyof Person, value: string | Date | null) {
        setForm(prev => {
            const data = { ...prev, [field]: value };
            return Person.fromJson(data);
        });
    };

    function formatForm(form: Person): Person {
        return Person.fromJson({
            ...form,
            name: sanitize(String(form.name ?? StringUtil.EMPTY)),
            description: sanitize(String(form.description ?? StringUtil.EMPTY)),
            phone: String(form.phone ?? StringUtil.EMPTY).replace(/\D/g, StringUtil.EMPTY),
            email: sanitize(String(form.email ?? StringUtil.EMPTY)),
        });
    }

    function validateFormData(form: Person): Errors {
        const error = validateForm(form);
        return error;
    }
    async function sendForm(
        form: Person,
        setForm: (form: Person) => void,
        setErrors: (errors: Errors) => void,
        setSuccessMsg: (msg: string | null) => void
    ) {
        try {
            await SendFormToN8n(form);
            setForm(new Person());
            setErrors({});
            setSuccessMsg('Formulário enviado com sucesso, em breve entraremos em contato!');
            setTimeout(() => setSuccessMsg(null), 5000);
        } catch (err) {
            console.error(err);
            setSuccessMsg('Desculpa, infelizmente ocorreu um erro. Tente novamente.');
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setSuccessMsg(null);

        const formattedForm = formatForm(form);
        const errors = validateFormData(formattedForm);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setLoading(false);
            return;
        }

        await sendForm(formattedForm, setForm, setErrors, setSuccessMsg);
        setLoading(false);
    }

    return (
        <Fade duration={2000}>
            <ContainerFaleConosco id='contato'>
                <Titulo>Fale Conosco</Titulo>
                {successMsg && (
                    <Alert severity={successMsg.startsWith("For") ? "success" : "error"}>
                        {successMsg}
                    </Alert>
                )}
                <BoxFaleConosco >
                    <FormSubmit onSubmit={handleSubmit} id='faleConosco'>
                        <Box marginBottom="1rem" component="div">
                            <TextField
                                label="Nome Completo"
                                value={form?.name}
                                onChange={(it) => handleChange('name', it.target.value)}
                                fullWidth
                                required
                                error={!!errors.lastname}
                                helperText={errors.lastname}
                            />
                        </Box>
                        <Box marginBottom="1rem" component="div">
                            <TextField
                                label="Telefone"
                                value={form?.phone}
                                onChange={(it) => handleChange('phone', it.target.value)}
                                fullWidth
                                placeholder='21900001111'
                                required
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Box>
                        <Box marginBottom="1rem" component="div">
                            <TextField
                                label="email"
                                value={form?.email}
                                onChange={(it) => handleChange('email', it.target.value)}
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Box>

                        <Box marginBottom="1rem" component="div">
                            <TextField
                                label="Serviço"
                                required
                                multiline
                                rows={4}
                                value={form?.description}
                                onChange={(it) => handleChange('description', it.target.value)}
                                fullWidth
                            />
                        </Box>

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            {loading ? "Enviando..." : "Agendar"}
                        </Button>
                    </FormSubmit>
                    <Img src={contato} alt='Imagem contato' />
                </BoxFaleConosco>
            </ContainerFaleConosco>
        </Fade>
    )
}

export default FaleConosco;
