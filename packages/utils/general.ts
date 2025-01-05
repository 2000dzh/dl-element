export const defaultNamespace = 'dl'
export const defaultRequestPrefix = '/dl-mapData'

export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';
