const urlBaseApi = "https://optometry-api-production.up.railway.app/";
const urlBase = "https://app-optometry.up.railway.app/";

const jwtApi = localStorage.getItem("jwt");
const userApi = localStorage.getItem("user");

const core = async (endPoint, method, data, jwtApi = null) => {
    try {
        $("#overlayApi").fadeIn(1000);
        if (method === "GET" || method === "DELETE") {
            const response = await fetch(`${urlBaseApi}${endPoint}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtApi}`
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message;
                throw new Error(errorMessage);
            }
            $("#overlayApi").fadeOut(1000);
            return response.json();
        }
        if (method === "POST" || method === "PUT" || method === "PATCH") {
            const response = await fetch(`${urlBaseApi}${endPoint}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtApi}`
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message;
                throw new Error(errorMessage);
            }
            $("#overlayApi").fadeOut(1000);
            return response.json();
        }
    } catch (error) {
        $("#overlayApi").fadeOut(1000);
        Swal.fire({
            title: "Error en la petición",
            text: error.message,
            icon: "error",
            confirmButtonText: "Entendido"
        });
    }
};

const dataTableCreate = (id, data, columns) => {
    $(`#${id}`).DataTable({
        processing: true,
        responsive: true,
        orderClasses: true,
        deferRender: true,
        lengthChange: false,
        pageLength: 10,
        data: data,
        dom:
            "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'lB>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        columns: [
            ...columns,
            {
                title: "Acciones",
                data: null,
                render: function (data, type, row) {
                    return `<div class="btn-group btn-group-sm" role="group">
                                    <button type="button" class="btn btn-primary btn-circle" onclick="changeStatus(${data.id}, ${data.status})" title="Cambiar estado">
                                        <i class="fas fa-exchange-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-success btn-circle" onclick="updatedRegister(${data.id})" title="Editar registro">
                                        <i class="fas fa-pen"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-circle" onclick="deletedRegister(${data.id})" title="Eliminar registro">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>`;
                },
            },
        ],
        language: {
            lengthMenu: "Mostrar _MENU_ registros",
            zeroRecords: "No se encontraron resultados",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior",
            },
            sProcessing: "Procesando...",
        }
    });
}

const validateForm = (fields) => {
    if (fields.length === 0) {
        return false;
    }
    for (let i = 0; i < fields.length; i++) {
        const value = fields[i].trim();
        if (value === "") {
            Swal.fire({
                title: "Campos vacios",
                text: "Por favor, rellene todos los campos",
                icon: "warning",
                confirmButtonText: "Entendido"
            });
            return false;
        }
    }
    return true;
}

const logout = () => {
    Swal.fire({
        position: "top",
        title: "Deseas cerrar sesion?",
        text: "Se cerrara la sesion actual",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar",
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then(async (result) => {
        if (result.isConfirmed) {
            const data = {
                token: jwtApi
            };
            await core("auth/logout", "POST", data);
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            localStorage.removeItem("dataStore");
            window.location.href = urlBase;
        }
    });
}

const sesion = () => {
    if (!jwtApi || jwtApi === null || jwtApi === undefined || jwtApi === '') {
        Swal.fire({
            title: "Sesión caducada",
            text: "Por favor, inicie sesión de nuevo",
            icon: "warning",
            showConfirmButton: false,
            showCloseButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false
        });
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("dataStore");
        setTimeout(() => {
            window.location.href = urlBase;
        }, 1500);
    }
}

const setUserSession = () => {
    const user = JSON.parse(userApi);
    $("#userNameSession").text(`${user.name} ${user.lastname}`);
}