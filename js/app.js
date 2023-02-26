const loadData = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
const displayData = (data) => {
    console.log(data)
    const container = document.getElementById('container');
    container.innerHTML = ''
    data.forEach(phone => {
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
