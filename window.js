var meyve = document.querySelectorAll('.meyve');
var box = document.querySelector('.box');
var btn = document.querySelector('button');

meyve.forEach(function (meyveEleman) {
  meyveEleman.addEventListener('click', function () {
    var newDiv = document.createElement('div');
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.flexWrap = 'wrap';
    newDiv.style.width = '20%';
    newDiv.textContent = meyveEleman.textContent;

    box.appendChild(newDiv);
  });
});

btn.onclick = function () {
  box.innerHTML = '';
};
