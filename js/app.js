const loadData = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
const displayData = (phones) => {
    console.log(phones)
    const container = document.getElementById('container');
    container.innerHTML = '';
    // no phone found error condition
    const noPhone = document.getElementById('noPhone')
    if (phones.length === 0) {
        noPhone.classList.remove('hidden')
    }
    else {
        noPhone.classList.add('hidden')
    }
    //display to 5 data
    const showAllPhone = document.getElementById('show-all');
    if (phones.length > 10) {
        phones = phones.slice(0, 6);
        showAllPhone.classList.remove('hidden')
    }
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl', 'border');
        div.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}"
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div
                class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes
                    whose
                    shoes does he choose?
                </p>
                <div class="card-actions">
                    <button
                        class="btn btn-primary">Buy
                        Now</button>
                </div>
            </div>
        `;
        container.appendChild(div)
    });
}

// search phone 
document.getElementById('search-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('search-input').value;
    loadData(inputValue)
})
