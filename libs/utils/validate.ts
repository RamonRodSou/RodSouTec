import { Person } from "@domain/Person";
import { Errors } from "./IError";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phoneDigitsRegex = /^[0-9]{8,11}$/;

export function sanitize(input: string): string {
    return input.replace(/<[^>]*>?/gm, '').trim();
}

export function validatePhone(phone: string): boolean {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length >= 8 && cleaned.length <= 11;
}

export function validateEmail(email: string): boolean {
    return emailRegex.test(email);
}

export function validateForm(entity: Person): Errors {
    const error: Errors = {};

    if (!entity.name || sanitize(String(entity.name)).length < 2) {
        error.firstname = 'Nome inválido (mínimo 2 caracteres).';
    }

    const phone = String(entity.phone ?? '').replace(/\D/g, '');
    if (!phoneDigitsRegex.test(phone)) {
        error.phone = 'Telefone deve conter apenas números (8 a 11 dígitos).';
    }

    const email = String(entity.email ?? '').trim();
    if (!emailRegex.test(email)) {
        error.email = 'Email inválido.';
    }

    return error;
}
