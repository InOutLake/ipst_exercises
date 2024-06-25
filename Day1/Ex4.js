(async () => {
    const fetch = await import('node-fetch');
})();

const FETCH_LINK = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json'

const fetchData = async (link) => {
    try {
        const response = await fetch(link);
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('Error:', error);
    }
}

(async () => {
    const data = await fetchData(FETCH_LINK);
    console.log(`
                Город: ${data.address.city}
                Улица: ${data.address.street}
                Дом: ${data.address.house}
                Фамилия: ${data.person.lastName} Имя: ${data.person.firstName} 
                Купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}
                `);
})();