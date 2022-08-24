// const fetchSuperHero = async() => {
//   let random = Math.floor(Math.random() * 100);
//   return fetch(`https://superheroapi.com/api/3213483725530427/${random}`, {
//     mode: 'no-cors',
//     header: {
//       'Access-Control-Allow-Origin':'*',
//     }
//   }); 
// }

// const resolvedPromise = async () => {
//   const final = await fetchSuperHero(); 
//   const popEle = document.getElementById('popupElement');
//   popEle.innerHTML = final;
//   return final;
// }
// let resp = resolvedPromise();
// console.log(resp);

// resp.then(data => {
//   console.log(data);
//   // const url = data.image.url;
//   const popEle = document.getElementById('popupElement');
//   popEle.innerHTML = data;
//   // const image = document.createElement('img');
//   // image.src = url;
//   // popEle.appendChild(image);
// })

// if(resp){
//   console.log(resp);
//   // const url = resp.image.url;
//   const popEle = document.getElementById('popupElement');
//   popEle.innerHTML = resp.json();
//   // const image = document.createElement('img');
//   // image.src = url;
//   // popEle.appendChild(image);
// }

fetch("https://icanhazdadjoke.com/slack").
then(data => data.json()).
then(jokeData => {
const jokeText = jokeData.attachments[0].text;
const jokeElement = document.getElementById('popupElement');
jokeElement.innerHTML = jokeText;
})