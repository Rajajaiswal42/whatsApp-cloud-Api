import axios from 'axios';
import { Router } from 'express';
const router = Router();

class WhatsAppAPI {
  public baseURL: string;
  public phoneNumberId: string;
  public accessToken: string;
  constructor() {
    this.baseURL = 'https://graph.facebook.com/v21.0';
    this.phoneNumberId = '452227864650708';
    this.accessToken =
      'EAAVKStcvSFwBO9UKnmIsyr6ss9plva6VbVQDWRpMsZCkPWNvGSHmQeprvfBbi2v1EuItyWUSXEBUfPP6RaQpVo8Mw19SmJ8ZBqE82MpMSLgB31kLbimcw28ha4shampIjTWO6cXLHrX7TCLSjkeRPCmI3FfxNzwQk26MzqmUUuqdVayNUZAuZBuP577BPOPS';
  }
  // https://graph.facebook.com/v21.0/548187525034205/messages `
  async sendTemplateMessageWithComponents(to: string, templateName: string) {
    try {
      const response = await axios({
        method: 'POST',
        url: `${this.baseURL}/${this.phoneNumberId}/messages`,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          messaging_product: 'whatsapp',
          to: to,
          type: 'template',
          template: {
            name: templateName,
            language: {
              code: 'en'
            },

            components: [
              {
                type: 'body',
                parameters: [
                  { type: 'text', text: 'Raja' }, // Matches {{1}}
                  { type: 'text', text: '1000' }, // Matches {{2}}
                  { type: 'text', text: 'id' }, // Matches {{2}}
                  { type: 'text', text: 'orderid' } // Matches {{2}}
                ]
              }
            ]
          }
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error sending template message:', error.response.data);
      throw error;
    }
  }

  async registerPhoneNumber(pin: string) {
    try {
      const response = await axios({
        method: 'POST',
        url: `${this.baseURL}/${this.phoneNumberId}/register`,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          messaging_product: 'whatsapp',
          pin: pin
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error registering phone number:', error.response);
      throw error;
    }
  }

  async sendMessage(to: string, message: string) {
    try {
      const response = await axios({
        method: 'POST',
        url: `${this.baseURL}/${this.phoneNumberId}/messages`,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: to,
          type: 'text',
          text: {
            body: message
          }
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error sending WhatsApp message:', error.response);
      console.log('error_data', error.response.data.error.error_data);
      throw error;
    }
  }
}

// Example route implementation
router.post('/send-message', async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;

    const whatsapp = new WhatsAppAPI();
    const sendTemplateMessageWithComponents = await whatsapp.sendTemplateMessageWithComponents(
      phoneNumber,
      'payment_confirmation'
    );
    // console.log({ sendTemplateMessageWithComponents });
    // const result = await whatsapp.sendMessage(phoneNumber, message);
    // console.log({ result });

    res.json({
      success: true,
      data: 'data is successful'
    });
  } catch (error) {
    res.status(500).json({
      success: false
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { phoneNumberId, pin } = req.body;
    const whatsapp = new WhatsAppAPI();
    const result = await whatsapp.registerPhoneNumber(pin);
    console.log({ result });
    return result;
  } catch (error) {
    res.status(500).json({
      success: false
    });
  }
});

export default router;
