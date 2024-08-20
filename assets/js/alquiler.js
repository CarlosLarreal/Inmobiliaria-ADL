const propiedades_alquiler = [
    {
        nombre: 'Apartamento en la playa',
        src: '/assets/img/depa-con-vista-a-la-playa.jpg',
        descripcion: 'Apartamento con vista al mar.',
        ubicacion: '789 Ocean Drive, Seaside, CA 23456',
        habitaciones: 2,
        costo: 2500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Condominio céntrico',
        src: '/assets/img/condominio-centrico.jpg',
        descripcion: 'Condominio cerca del centro.',
        ubicacion: '123 Downtown St, Metropolis, CA 34567',
        habitaciones: 3,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Chalet en las Montañas',
        src: '/assets/img/Chalet-en-las-Montañas.jpg',
        descripcion: 'Chalet acogedor en un entorno natural.',
        ubicacion: 'Callejón del Bosque, Pueblo Z',
        habitaciones: 5,
        costo: 400000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en la Playa',
        src: '/assets/img/casa-en-la-playa.jpg',
        descripcion: 'Casa con acceso directo a la playa.',
        ubicacion: 'Playa del Sol, Costa W',
        habitaciones: 4,
        costo: 600000,
        smoke: true,
        pets: true
    }
];

const containerAlquiler = document.getElementById('propiedadesAlquiler');
propiedades_alquiler.forEach(propiedad => {
    containerAlquiler.innerHTML += `
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
