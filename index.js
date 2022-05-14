const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

function openModal(){
    modal.style.display = 'block';
    overlay.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

}

function closeModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';


}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);