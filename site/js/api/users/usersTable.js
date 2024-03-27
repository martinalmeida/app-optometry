$(document).ready(async () => {
    sesion();
    setUserSession();
    const users = await getUsers();
    initializeDataTable(users);
    localStorage.removeItem("dataStore");
});

const getUsers = async () => {
    try {
        const response = await core("user", "GET", null, jwtApi);
        return response;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

const initializeDataTable = (users) => {
    $("#dataTableUsers").DataTable({
        data: users.users,
        columns: [
            { title: "ID", data: "id" },
            { title: "Nombre", data: "name" },
            { title: "Apellidos", data: "lastname" },
            { title: "Correo", data: "email" },
            {
                title: "Estado",
                data: "status",
                render: function (data) {
                    return data ? "Activo" : "Inactivo";
                },
            },
            {
                title: "Acciones",
                data: null,
                render: function (data, type, row) {
                    return `
                        <div class="btn-group btn-group-sm" role="group">
                            <button type="button" class="btn btn-primary btn-circle" onclick="changeStatus(${data.id})" title="Cambiar estado">
                                <i class="fas fa-exchange-alt"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-circle" onclick="updatedRegister(${data.id})" title="Editar registro">
                                <i class="fas fa-pen"></i>
                            </button>
                            <button type="button" class="btn btn-danger btn-circle" onclick="deletedRegister(${data.id})" title="Eliminar registro">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                        `;
                },
            },
        ],
    });
};

const createdRegister = () => {
    const dataStore = {
        title: "Agregar usuario",
        button: "Crear usuario",
        class: "btn-primary",
        id: null,
    };
    localStorage.setItem("dataStore", JSON.stringify(dataStore));
    window.location.href = "./create.html";
};

const changeStatus = async (id) => {
    Swal.fire({
        title: "Deseas cambiar el estado?",
        text: "Se cambiara el estado del usuario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar",
    }).then(async (result) => {
        if (result.isConfirmed) {
            // await core("auth/logout", "POST", data);
            await refreshTable();
        }
    });
};

const updatedRegister = (id) => {
    const dataStore = {
        title: "Editar usuario",
        button: "Actualizar usuario",
        class: "btn-success",
        id: id,
    };
    localStorage.setItem("dataStore", JSON.stringify(dataStore));
    window.location.href = "./create.html";
};

const deletedRegister = async (id) => {
    Swal.fire({
        title: "Deseas eliminar el usuario?",
        text: "Se eliminara el usuario de la base de datos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
        if (result.isConfirmed) {
            const response = await core(`user/${id}`, "DELETE", null, jwtApi);
            if (response) {
                await refreshTable();
            }
        }
    });
};


const refreshTable = async () => {
    const table = $("#dataTableUsers").DataTable();
    table.rows().remove().draw();
    const users = await getUsers();
    table.rows.add(users).draw();
}