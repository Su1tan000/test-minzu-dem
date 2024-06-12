import { Button, Form, Input, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import i18next from 'i18next';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);

    if (!serviceId || !templateId || !publicKey) {
      console.error('Error: Environment variables are not set correctly.');
      return;
    }

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: 'Minzu-dem',
      message: values.message,
      number: values.number,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully', response);
      form.resetFields();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={handleSubmit}
      className='grid gap-4 w-100% ml-[15%]'
    >
      <p className='my-4 md:w-[80%] lg:w-[80%]'>{t('contactForm.contact_us_message')}</p>

      <div className="flex gap-2 items-center">
        <Form.Item
          className="w-full mb-0"
          name="name"
           label={t('contactForm.name')}
          labelCol={{ span: 24 }}
        >
          <Input
            className="w-[62%] h-11 border border-black bg-white  rounded-none p-2"
            suffix={<Tooltip title="Extra information" />}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('contactForm.email')}
          labelCol={{ span: 24 }}
          className="w-full mb-0"
        >
          <Input
             className="w-[62%] h-11 border border-black bg-white  rounded-none p-2"
            suffix={<Tooltip title="Extra information" />}
          />
        </Form.Item>
      </div>
      <Form.Item
        name="number"
        label={t('contactForm.phone_number')}
        labelCol={{ span: 24 }}
        className="w-[90%] mb-0"
      >
        <Input
           className="w-[90%] h-11 border border-black bg-white  rounded-none p-2"
          suffix={<Tooltip title="Extra information" />}
        />
      </Form.Item>
      <Form.Item
        name="message"
        label={t('contactForm.message')}
        labelCol={{ span: 24 }}
        className="w-[90%] mb-0"
      >
        <Input.TextArea
          className="w-[90%] border border-black bg-white round ed-none p-2"
          rows={8}
        />
      </Form.Item>
      <Form.Item
        className='fl[90%]ustify-center md:justify-start mt-6  lg:justify-center'
        wrapperCol={{ offset: 0, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          {t('contactForm.send')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm