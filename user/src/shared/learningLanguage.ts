export type LearningLanguage = 'EN' | 'JA' | 'KO'

const LANGUAGE_STORAGE_KEY = 'elm-learning-language'
const DEFAULT_LANGUAGE: LearningLanguage = 'EN'

export function getPreferredLearningLanguage(): LearningLanguage {
  const rawValue = localStorage.getItem(LANGUAGE_STORAGE_KEY)?.toUpperCase()
  if (rawValue === 'JA' || rawValue === 'KO' || rawValue === 'EN') {
    return rawValue
  }
  return DEFAULT_LANGUAGE
}

export function setPreferredLearningLanguage(language: LearningLanguage) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}

export function getLearningLanguageOptions() {
  return [
    { label: '英语', value: 'EN' as const },
    { label: '日语', value: 'JA' as const },
    { label: '韩语', value: 'KO' as const },
  ]
}

export function getLearningLanguageLabel(language: LearningLanguage) {
  if (language === 'JA') {
    return '日语'
  }
  if (language === 'KO') {
    return '韩语'
  }
  return '英语'
}
