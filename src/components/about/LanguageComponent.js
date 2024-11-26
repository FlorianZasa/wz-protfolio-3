import React from 'react'
import { colors } from '../../styles/colors'

function LanguageComponent({ iconSrc, language, level }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', minWidth: '9rem', maxWidth: '10rem'}}>
      <div>
        <img src={iconSrc} alt="Language" />
      </div>
      <div style={{color: colors.primary, fontWeight: '600', fontSize: '22px'}}>{language}</div>
      <div style={{color: colors.black, fontWeight: '400', fontSize: '28px'}}>{level}</div>
    </div>
  )
}

export default LanguageComponent