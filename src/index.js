import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const elements = {
	select: document.querySelector('.breed-select'),
	loader: document.querySelector('.loader'),
	error: document.querySelector('.error'),
	catInfo: document.querySelector('.cat-info')
};

const {select, loader, error, catInfo} = elements;