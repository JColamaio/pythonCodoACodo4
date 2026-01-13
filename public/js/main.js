// Main entry point - Importa e inicializa todos los modulos
import { initHeader } from './modules/header.js';
import { initFooter } from './modules/footer.js';
import { initSucursalesSelector } from './modules/sucursales.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initFooter();
    initSucursalesSelector();
});
