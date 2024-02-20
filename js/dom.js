const allBtn = document.getElementsByClassName("add-btn");
let cnt = 8;
let count = 0;

for (const botn of allBtn) {
    botn.addEventListener("click", function(){
        if (count == 4) {
            return;
        }
        cnt = cnt-1
        count = count+1;
        document.getElementById('butt').removeAttribute('disabled');
        document.getElementById("seat-left").innerText = cnt;
        document.getElementById("seat-add").innerText = count;
        const ticketName = event.target.innerText;
        const className = 'Economy';
        const price = '550';
        const selectedContainer = document.getElementById("selected-place-container");
        const li = document.createElement('li');
        li.classList.add('flex');

        const p = document.createElement("p");
        p.innerText = ticketName;
        const p2 = document.createElement("p2");
        p2.innerText = className;
        const p3 = document.createElement("p3");
        p3.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        const totalCost = document.getElementById("total-cost").innerText;
        const convertedTotalCost = parseInt(totalCost);
        document.getElementById('total-cost').innerText = convertedTotalCost+parseInt(price);

        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = convertedGrandTotal+parseInt(price);
    });
}


function grandTotalCost(){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    const newVariable = document.getElementById('delete-confirm').value;
    if (newVariable === 'NEW15'){
        document.getElementById('grand-total').innerText = convertedTotalCost*0.85;
    } else if (newVariable === 'Couple 20'){
        document.getElementById('grand-total').innerText = convertedTotalCost*0.8;
    } else {
        document.getElementById('grand-total').innerText = convertedTotalCost;
    }
}

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text === 'NEW15'){
        deleteButton.removeAttribute('disabled');
    } else if (text === 'Couple 20') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
});

document.getElementById('btn-delete').addEventListener('click',function(){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
});

const buyBtn = document.getElementById('scroll-button');
buyBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 1440,
        left: 0,
        behavior: 'smooth'
    });
});