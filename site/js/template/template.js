const menu = `<li class="nav-item">
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
                
                <div class="overlayApi" id="overlayApi">
                    <div class="spinner-border text-primary" role="status">
                    </div>
                </div>`;

$(document).ready(function () {
    if ($('#dinamicMenu').length) {
        $('#dinamicMenu').html(menu);
    }
    $("#overlayApi").fadeOut(1000);
});