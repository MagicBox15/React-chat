const url = 'https://ice.dating/get_data.js';

export const request = async() => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
};

//  решить, как вынести логику в отдельный файл
