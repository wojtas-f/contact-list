import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const [radioValue, setRadioValue] = useState('1');
    const { i18n } = useTranslation();

    const languages = [
        { name: 'pl', value: '1' },
        { name: 'en', value: '2' },
    ];

    const handleLanguageChange = (lang) => {
        const langObject = languages.find(
            (selectedLanguage) => selectedLanguage.value === lang
        );

        setRadioValue(langObject.value);
        i18n.changeLanguage(langObject.name);
    };

    return (
        <ButtonGroup style={{ height: 'fit-content' }}>
            {languages.map((radio) => (
                <ToggleButton
                    key={radio.name}
                    id={`radio-${radio.name}`}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) =>
                        handleLanguageChange(
                            e.currentTarget.value,
                            e.currentTarget.value
                        )
                    }
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};

export default LanguageSwitcher;
