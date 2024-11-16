function showSection(id) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

// Mostrar la sección Home por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});