import React from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

function ContactMeButton({style}) {
    const { t } = useTranslation();

    const contactMe = () => {
      window.location.href = "mailto:contact@wiktoriazemla.com";
    }

    return (
      <Button style={style} text={t('home.HEADER_CONTACT_ME')} icon={`${process.env.PUBLIC_URL}/contact_me/envelope.png`} onClick={contactMe} />        
    );
}

export default ContactMeButton;
