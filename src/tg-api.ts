import { Observable } from 'rxjs';
import { Http } from './http';
import { Update } from './update.dto';

export class TelegaApi {
    private readonly baseApi: string = `https://api.telegram.org/bot${this.botToken}/`;

        constructor(
        private chatId: string,
        private botToken: string,
    ) {}

    public sendMessageToChat(message: string): Observable<void> {
        return Http.get(`${this.baseApi}sendMessage`, {
            params: {
                chat_id: this.chatId,
                text: message,
            }
        });
    }

    public authorize(): Observable<void> {
        return Http.get(`${this.baseApi}getMe`);
    }

    public getUpdates(): Observable<Update> {
        return Http.get(`${this.baseApi}getUpdates?offset=0`);
    }
}