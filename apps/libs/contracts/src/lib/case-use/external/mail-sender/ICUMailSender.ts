
export interface ICUMailSender {
    sendMail(): Promise<boolean>;
}