export const fetchApi = async (endpoint: string) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Erro ao fazer a requisição')
  }
  const data = await response.json()
  return data;
};
