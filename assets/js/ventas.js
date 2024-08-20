const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo',
        src: '/assets/img/de-lujo.jpg',
        descripcion: 'Un apartamento lujoso en el centro.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa moderna',
        src: '/assets/img/casa-modrna.jpg',
        descripcion: 'Casa moderna con jardín.',
        ubicacion: '456 Modern St, Green Park, CA 67890',
        habitaciones: 3,
        costo: 4500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Ático con Terraza',
        src: '/assets/img/atico-con-terraza.jpg',
        descripcion: 'Ático con terraza privada y vistas panorámicas.',
        ubicacion: 'Zona Residencial, Ciudad Z',
        habitaciones: 2,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Cabaña Rústica',
        src: '/assets/img/cabana-rustica.jpg',
        descripcion: 'Cabaña en la montaña, ideal para escapar de la ciudad.',
        ubicacion: 'Valle del Río, Montaña Q',
        habitaciones: 3,
        costo: 800,
        smoke: false,
        pets: false
    }
];
// ventas
const containerVenta = document.getElementById('propiedadesVenta');
propiedades_venta.forEach(propiedad => {
    containerVenta.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen de ${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `;
});
