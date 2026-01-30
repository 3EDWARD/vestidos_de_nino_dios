document.addEventListener('DOMContentLoaded', () => {

    const priceBox = document.getElementById('price');
    const buttons = document.querySelectorAll('.size-btn');
    const productKey = document.body.dataset.product;

    const PRICES = {
        luz_divina: {
            15: 390,
            20: 435,
            25: 450,
            30: 490,
            35: 520,
            40: 560,
            45: 600,
        },
        eterno_milagro: {
            15: 390,
            20: 435,
            25: 450,
            30: 490,
            35: 520,
            40: 560,
            45: 600,
        },
         proteccion: {
            10: 135,
            12: 290,
            15: 310,
            20: 330,
            25: 350,
            30: 385,
            35: 410,
            40: 450,
        },
          dones: {
            10: 135,
            12: 290,
            15: 310,
            20: 330,
            25: 350,
            30: 385,
            35: 410,
            40: 450,
        },
         salvador: {
            10: 135,
            12: 290,
            15: 310,
            20: 330,
            25: 350,
            30: 385,
            35: 410,
            40: 450,
        },
        amor: {
            10: 135,
            12: 290,
            15: 310,
            20: 330,
            25: 350,
            30: 385,
            35: 410,
            40: 450,
        },
        prosperidad: {
            12: 310,
            15: 370,
            20: 460,
            25: 480,
            30: 550,
            40: 650,
        },
        providencia: {
            12: 310,
            15: 370,
            20: 460,
            25: 480,
            30: 550,
            35: 550,
            40: 650,
        },
           sanador: {
            12: 310,
            15: 370,
            20: 460,
            25: 480,
            30: 550,
            35: 550,
            40: 650,
        },
            paz: {
            15: 380,
            20: 430,
            25: 450,
            30: 480,
            35: 520,
            40: 550,
            45: 600,
        },
            nazaret: {
            15: 380,
            20: 430,
            25: 450,
            30: 480,
            35: 520,
            40: 550,
            45: 600,
        },
        
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            const size = button.dataset.size;
            const price = PRICES[productKey]?.[size];

            priceBox.textContent = price
                ? `$${price}`
                : 'No disponible';

            // Resetear botones
            buttons.forEach(btn => {
                btn.classList.remove('bg-blue-500', 'text-white');
                btn.classList.add('bg-white', 'text-black');
            });

            // Botón activo
            button.classList.remove('bg-white', 'text-black');
            button.classList.add('bg-blue-500', 'text-white');
        });
    });

});
