import {fetchBreeds, fetchCatByBreed} from "./cat-api";
import './css/style.css'

const elements = {
	select: document.querySelector('.breed-select'),
	loader: document.querySelector('.loader'),
	error: document.querySelector('.error'),
	catInfo: document.querySelector('.cat-info')
};

const {select, loader, error, catInfo} = elements;

catInfo.classList.add('is-hidden');
loader.classList.add('is-hidden');
error.classList.add('is-hidden');
select.addEventListener('change', createMarkUp);

updateSelect()

function updateSelect(data) {
	fetchBreeds(data)
	.then(data =>{
		loader.classList.replace('loader', 'is-hidden');

		let markSelect = data.map(({name, id})=>{
			return `<option value = '${id}'>${name}</option>`;
		});
		select.insertAdjacentHTML('beforeend', markSelect);
	})
	.catch(onFatchError);
}

function createMarkUp(evt) {
	loader.classList.replace('is-hidden', 'loader');
	select.classList.add('is-hidden');
	catInfo.classList.add('is-hidden');

	const breedId = evt.currentTarget.value;

	fetchCatByBreed(breedId)
	.then(data =>{
		loader.classList.replace('loader','is-hidden');
		select.classList.remove('is-hidden');
		const {url, breeds} = data[0];
		
		catInfo.innerHTML = `
		<img src="${url}" alt="${breeds[0].name}" width="400"/>
		<div class="box">
			<h2>${breeds[0].name}</h2>
			<p>${breeds[0].description}</p>
			<p><strong>Temperament:</strong> ${breeds[0].temperament}</p>
		</div>`;
			catInfo.classList.remove('is-hidden');
			
	})
	.catch(onFatchError);
}


function onFatchError(error) {
	select.classList.remove('is-hidden');
	loader.classList.replace('loader', 'is-hidden');
}

