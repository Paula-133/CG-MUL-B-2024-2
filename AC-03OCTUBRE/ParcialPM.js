let scene, camera, renderer, controls;
const cubes = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement); // Inicializa los controles de órbita

    camera.position.z = 5;

    // Crear el primer cubo
    createCubes(1);

    // Manejar el evento de tecla F5
    window.addEventListener('keydown', (event) => {
        if (event.key === 'F5') {
            event.preventDefault(); // Prevenir el comportamiento por defecto de F5
            const randomCount = Math.floor(Math.random() * 5) + 1;
            createCubes(randomCount);
        }
    });

    animate();
}

function createCubes(count) {
    for (let i = 0; i < count; i++) {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ wireframe: true });
        const cube = new THREE.Mesh(geometry, material);

        // Posicionar los cubos alineados
        cube.position.x = (cubes.length + 1) * 2; // Espaciado entre cubos
        cube.rotation.y = Math.PI / 4; // Rotación inicial

        scene.add(cube);
        cubes.push(cube);
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Rotar todos los cubos en el mismo sentido
    cubes.forEach(cube => {
        cube.rotation.y += 0.01; // Velocidad de rotación
    });

    controls.update(); // Actualizar controles
    renderer.render(scene, camera);
}

init();
