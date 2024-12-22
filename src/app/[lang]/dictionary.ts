// import 'server-only'
const dictionaries = {
    en: () => import('../../../public/json/en.json').then((module) => module.default),
    id: () => import('../../../public/json/id.json').then((module) => module.default),
}
export const getDictionary = async (locale:keyof typeof dictionaries) => {
    return dictionaries[locale]()
}