import { IMailSender } from "../../../entities";

export interface IMailSenderServiceContract {
    sendMail(mail: IMailSender): Promise<boolean>;
}