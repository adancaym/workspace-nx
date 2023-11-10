import { MailClient } from './MailClient';

describe('MailClient', () => {
  let mailClient: MailClient;

  beforeEach(() => {
    mailClient = new MailClient();
  });

  it('should create an instance of MailClient', () => {
    expect(mailClient).toBeDefined();
  });

  it('should have a sendMail method', () => {
    expect(mailClient.sendMail).toBeDefined();
  });

  it('should return a resolved promise when sendMail is called and dto is defined', async () => {
    mailClient.dto = { email: 'test@example.com', subject: 'Test', body: 'This is a test email' };
    const result = await mailClient.sendMail();
    expect(result).toBe(true);
  });

  it('should return a resolved promise when sendMail is called and dto is undefined', async () => {
    const result = await mailClient.sendMail();
    expect(result).toBe(false);
  });
});