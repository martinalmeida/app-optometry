let ruta = window.location.pathname;
let partes = ruta.split('/');
let nombreArchivo = partes[partes.length - 1];

const headerHome = `<a class="sidebar-brand d-flex align-items-center justify-content-center" href="home.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="sidebar-brand-text mx-3">OptometryApp</div>
                </a>

                <hr class="sidebar-divider my-0">

                <li class="nav-item active">
                <a class="nav-link" href="home.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Pagina Principal</span></a>
                </li>`;

const headerView = `<a class="sidebar-brand d-flex align-items-center justify-content-center" href="../../home.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="sidebar-brand-text mx-3">OptometryApp</div>
                </a>

                <hr class="sidebar-divider my-0">

                <li class="nav-item active">
                <a class="nav-link" href="../../home.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Pagina Principal</span></a>
                </li>`;

const menu = `<hr class="sidebar-divider">

                <div class="sidebar-heading">
                    Optometria
                </div>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-users"></i>
                        <span>Personas</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Usuarios y pacientes:</h6>
                            <a class="collapse-item" href="./views/users">Usuarios</a>
                            <a class="collapse-item" href="./views/patients">Pacientes</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Registros</span>
                    </a>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Registros:</h6>
                            <a class="collapse-item" href="#">Historias Clinicas</a>
                            <a class="collapse-item" href="#">Monturas Realizadas</a>
                        </div>
                    </div>
                </li>
                
                <hr class="sidebar-divider d-none d-md-block">
                
                <div class="overlayApi" id="overlayApi">
                    <div class="spinner-border text-primary" role="status">
                    </div>
                </div>`;

if ($('#dinamicSidebar').length && nombreArchivo === 'home.html') {
    $('#dinamicSidebar').html(headerHome + menu);
}

if ($('#dinamicSidebar').length && nombreArchivo !== 'home.html') {
    $('#dinamicSidebar').html(headerView + menu);
}

$(document).ready(function () {
    $("#overlayApi").fadeOut(1000);
});