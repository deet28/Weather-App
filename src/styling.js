const imageTest = document.querySelector('.test-img');
const body = document.getElementsByTagName('body')[0];


async function getBackground(){
  const response = await fetch('https://api.giphy.com/v1/gifs/search?q=elfrassi&api_key=68EvUpd4dBxmB0QMmLGFQb6Uwxqi1LgJ&s&limit=3', {mode: 'cors'});
  const picData = await response.json();
  const url = picData.data[2].images.original.url
  document.body.background = url;
}

getBackground();
