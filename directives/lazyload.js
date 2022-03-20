export default {
	// inserted Хук который срабатывает когда директива вставляется в компонент
	inserted: (el) => {
		function loadImage() {
			// Просто берёт значение из data-src (он у нас с v-bind) и вставляет в src. На случай если браузер не поддерживает intersection observer
			el.src = el.dataset.src;
		}

		function callback(entries, observer) {
			entries.forEach( (entry) => {
				// каждый entry описывает изменение пересечения для одного observed (таргет элемент)
				// target element:
				// entry.boundingClientRect
				// entry.intersectionRatio
				// entry.intersectionRect
				// entry.isIntersecting
				// entry.rootBounds
				// entry.target
				// entry.time

				// Если элемент/таргет/entry интерсептиться щас, загрузи картинку и отпишись (чтоб каждый раз не загружать)
				if (entry.isIntersecting) {
					loadImage();
					observer.unobserve(el);
				}
			});
		}

		function createIntersectionObserver() {
			const options = {
				// root это с каким элементом пересикаться, null это viewport
				root: null,

				// threshold это на сколько процентов должно быть видно элемент, чтоб засчиталось пересечение. 0 это сразу же с 1 пикселя. 0.5 это половина, 1 это позиция, когда все пиксели должны быть видны, картинка проскролена
				threshold: 0
			};

			const observer = new IntersectionObserver(callback, options);
			observer.observe(el)
		}

		// Если браузер не поддерживает этот апи, то произойдёт обычная загрузка, никаких изменений
		if ( ! window['IntersectionObserver'])
			loadImage();
		else
			createIntersectionObserver();
	}
}
