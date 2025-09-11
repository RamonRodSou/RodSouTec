import { Person } from "../../libs/domain/Person";

export async function SendFormToN8n(entity: Person) {
    const webhook = import.meta.env.VITE_APP_WEBHOOK;

    if (!webhook) {
        throw new Error("WEBHOOK não definido");
    }

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entity),
        });

        if (!response.ok) {
            throw new Error(`Erro na resposta do webhook: ${response.status}`);
        }

        const data = await response.text();

        return ({ status: 'ok', webhookResponse: data });

    } catch (err) {
        return { err: 'Erro ao enviar para o webhook' }
    }
}
