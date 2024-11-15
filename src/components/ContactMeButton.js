import React from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

function ContactMeButton() {
    const { t } = useTranslation();

    const contactMe = () => {
      window.location.href = "mailto:contact@wiktoriazemla.com";
    }

    return (
      <Button text={t('home.HEADER_CONTACT_ME')} icon={"./contact_me/envelope.png"} onClick={contactMe} />        
    );
}

export default ContactMeButton;
