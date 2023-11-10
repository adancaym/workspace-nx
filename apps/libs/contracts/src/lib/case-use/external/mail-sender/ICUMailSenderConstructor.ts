import { IMailSender } from "../../../contracts";
import { ICUMailSender } from "./ICUMailSender";

export interface ICUMailSenderConstructor {
   emailDto: IMailSender;
   service: ICUMailSender;
}