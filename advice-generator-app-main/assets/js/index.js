const _URI = 'https://api.adviceslip.com/advice';

const adviceId = document.getElementById('adviceId');
const adviceQuote = document.getElementById('quote');

async function apiCall() {
  try {
    const request = await fetch(_URI, {
      method: 'GET'
    }, { cache: "no-cache" });

    if (!request.ok) {
      throw new Errror(`HTTP error: ${response.status}`)
    }


    const data = await request.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Could not connect to API');
  }
}

async function generateAdvice() {
  const response = await apiCall();

  const data = response.slip;

  adviceId.innerHTML = `#${data.id}`;
  adviceQuote.innerHTML = `"${data.advice}"`
}