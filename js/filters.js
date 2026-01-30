document.addEventListener('DOMContentLoaded', () => {

	const colorFilter = document.getElementById('filter-color');
	const sizeFilter = document.getElementById('filter-size');
	const priceFilter = document.getElementById('filter-price');

	const products = Array.from(document.querySelectorAll('.card-product'));
	const container = document.querySelector('.container-products');

	const btnFilter = document.getElementById('btn-filter');
	const filtersBox = document.getElementById('filters');
	const btnClear = document.getElementById('btn-clear-filters');

	// Guardar orden original
	const originalOrder = [...products];

	/* ================= CARGAR COLORES DESDE HTML ================= */
	function loadColors() {
		const colors = new Set();

		products.forEach(product => {
			if (product.dataset.color) {
				colors.add(product.dataset.color);
			}
		});

		colors.forEach(color => {
			const option = document.createElement('option');
			option.value = color;
			option.textContent =
				color.charAt(0).toUpperCase() + color.slice(1);
			colorFilter.appendChild(option);
		});
	}

	// Ejecutar al cargar
	loadColors();

	/* ================= MOSTRAR / OCULTAR FILTROS ================= */
	btnFilter.addEventListener('click', () => {
		filtersBox.classList.toggle('active');
	});

	/* ================= APLICAR FILTROS ================= */
	function applyFilters() {
		const color = colorFilter.value;
		const size = sizeFilter.value;

		products.forEach(product => {
			const matchColor = !color || product.dataset.color === color;
			const matchSize = !size || product.dataset.size
	.split(',')
	.map(s => s.trim())
	.includes(size);

			product.style.display = (matchColor && matchSize) ? '' : 'none';
		});
	}

	/* ================= ORDENAR POR PRECIO ================= */
	function sortByPrice() {
		const order = priceFilter.value;
		if (!order) return;

		const visibleProducts = products.filter(
			product => product.style.display !== 'none'
		);

		visibleProducts.sort((a, b) => {
			const priceA = parseFloat(a.dataset.price);
			const priceB = parseFloat(b.dataset.price);

			return order === 'asc'
				? priceA - priceB
				: priceB - priceA;
		});

		visibleProducts.forEach(product => container.appendChild(product));
	}

	/* ================= LIMPIAR FILTROS ================= */
	function clearFilters() {
		colorFilter.value = '';
		sizeFilter.value = '';
		priceFilter.value = '';

		products.forEach(product => {
			product.style.display = '';
		});

		// Restaurar orden original
		originalOrder.forEach(product => container.appendChild(product));
	}

	/* ================= EVENTOS ================= */
	colorFilter.addEventListener('change', () => {
		applyFilters();
		sortByPrice();
	});

	sizeFilter.addEventListener('change', () => {
		applyFilters();
		sortByPrice();
	});

	priceFilter.addEventListener('change', () => {
		applyFilters();
		sortByPrice();
	});

	btnClear.addEventListener('click', clearFilters);

});
