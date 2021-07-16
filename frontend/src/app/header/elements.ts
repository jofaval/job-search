import { faBusinessTime, faHome, faSearch, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

/**
 * Todos los elementos de navegación de la aplicación
 */
export const ELEMENTS = [
    { name: 'Home'   , url: '/home'    , icon: faHome         },
    { name: 'Buscar' , url: '/buscar'  , icon: faSearch       },
    { name: 'Empresa', url: '/empresa' , icon: faBusinessTime },
    { name: 'Perfil' , url: '/perfil'  , icon: faUser         },
];