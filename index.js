const productCategories = {
            'Гаманці': [
                { name: 'Гаманець чоловічий', description: 'Опис гаманця чоловічого' },
                { name: 'Гаманець жіночий', description: 'Опис гаманця жіночого' },
                { name: 'Гаманець унісекс', description: 'Опис унісекс гаманця' }
            ],
            'Сумки': [
                { name: 'Сумка чоловіча', description: 'Опис сумки чоловічої' },
                { name: 'Сумка жіноча', description: 'Опис сумки жіночої' },
                { name: 'Сумка унісекс', description: 'Опис унісекс сумки' }
            ],
            'Ремені': [
                { name: 'Чоловічий ремінь', description: 'Опис чоловічого ременя' },
                { name: 'Жіночий ремінь', description: 'Опис жіночогоременя' },
                { name: 'Ремінь унісекс', description: 'Опис унісекс ременя' }
            ]
        };


        function showProducts(category) {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';

            const products = productCategories[category];
            products.forEach((product) => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = product.name;
                link.onclick = () => showProductDetails(product);
                listItem.appendChild(link);
                productList.appendChild(listItem);
            });

            
            const categoriesElement = document.getElementById('categories');
            categoriesElement.classList.remove('hidden');
        }

       
        function showProductDetails(product) {
            const productName = document.getElementById('productName');
            const productDescription = document.getElementById('productDescription');
            const productInfo = document.getElementById('productInfo');
            const orderForm = document.getElementById('orderForm');

            productName.textContent = product.name;
            productDescription.textContent = product.description;

            productInfo.classList.remove('hidden');
            orderForm.classList.add('hidden');
        }

      
        function buyProduct() {
            const orderForm = document.getElementById('orderForm');
            orderForm.classList.remove('hidden');
        }

       
        function submitOrder(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const city = document.getElementById('city').value;
            const delivery = document.getElementById('delivery').value;
            const payment = document.getElementById('payment').value;
            const quantity = document.getElementById('quantity').value;
            const comment = document.getElementById('comment').value;

            if (!fullName || !delivery || !quantity) {
                alert("Будь ласка, заповніть обов'язкові поля.");
                return;
            }

            
            const orderInfo = `Замовлення:
        Товар: ${document.getElementById('productName').textContent}
        Кількість: ${quantity}
        ПІБ: ${fullName}
        Місто: ${city}
        Склад Нової пошти: ${delivery}
        Оплата: ${payment}
        Коментар: ${comment}`;

            alert(`Товар куплено! Дякуємо за замовлення!\n\n${orderInfo}`);

            
            const form = document.querySelector('form');
            form.reset();

           
            const productInfo = document.getElementById('productInfo');
            const orderForm = document.getElementById('orderForm');
            const productList = document.getElementById('productList');
            productInfo.classList.add('hidden');
            orderForm.classList.add('hidden');
            productList.classList.add('hidden');

          
            const categoriesElement = document.getElementById('categories');
            categoriesElement.classList.remove('hidden');
        }