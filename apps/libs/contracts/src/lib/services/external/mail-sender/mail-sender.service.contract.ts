import { IMailSender } from "../../../contracts";

export interface IMailSenderServiceContract {
    sendMail(mail: IMailSender): Promise<boolean>;
}