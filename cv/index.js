const img = document.querySelectorAll('.ed-img');
const ed = document.querySelectorAll('.ed');

for (let i = 0; i < img.length; i++) {
    // ed[i].style.backgroundImage = `url(${img[i]})`;
    ed[i].style.backgroundImage = `../../../роза в паутине.jpg`;
    console.log(ed[i]);
}