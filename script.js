// Меню бургер

const iconMenu = document.querySelector('.main-header__burger');
const menuBody = document.querySelector('.main-header__menu');

if(iconMenu) {
    
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//custom select

const wrapper = document.querySelector(".order__select"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Sed ut perspiciatis", "Nemo enim ipsam", "Et harum quidem", "Temporibus autem", "Itaque earum rerum", 
"Sed ut perspiciatis", "Nemo enim ipsam", "Et harum quidem", "Temporibus autem", "Itaque earum rerum" ];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

// slider

const slider = document.querySelector('.slider__input')
const value = document.querySelector('.slider__percent')

value.textContent = slider.value + ' %'

slider.oninput = function(){
    value.textContent = this.value + ' %'
}