// galeria.js - Lógica dinámica para la galería de productos

document.addEventListener('DOMContentLoaded', () => {
  const modalGaleria = document.getElementById('modalGaleria');
  const carouselContent = document.getElementById('carouselContent');
  const modalTitle = document.getElementById('modalGaleriaLabel');

  if (!modalGaleria) return;

  modalGaleria.addEventListener('show.bs.modal', function (event) {
    const imgTrigger = event.relatedTarget; 
    
    const tituloProducto = imgTrigger.getAttribute('data-titulo') || 'Producto';
    const fotosString = imgTrigger.getAttribute('data-fotos'); 
    
    if (!fotosString) return;

    const listaFotos = fotosString.split(', ');

    // Actualizar título
    modalTitle.textContent = `${tituloProducto}`;

    // Limpiar imágenes anteriores
    carouselContent.innerHTML = '';

    // Cargar nuevas imágenes dinámicamente
    listaFotos.forEach((rutaFoto, indice) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (indice === 0) carouselItem.classList.add('active');

      const img = document.createElement('img');
      img.src = rutaFoto.trim();
      img.classList.add('d-block', 'w-100');
      img.alt = `Foto ${indice + 1} de ${tituloProducto}`;
      img.style.maxHeight = '80vh';
      img.style.objectFit = 'contain';

      carouselItem.appendChild(img);
      carouselContent.appendChild(carouselItem);
    });
  });
});