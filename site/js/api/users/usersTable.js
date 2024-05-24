$(document).ready(async () => {
    sesion();
    setUserSession();
    await getUsers();
    localStorage.removeItem("dataStore");
});

const getUsers = async () => {
    try {
        const response = await core("user", "GET", null, jwtApi);
        dataTableCreate(
            "dataTable",
            response.users,
            [{ title: "ID", data: "id" },
            { title: "Nombre", data: "name" },
            { title: "Apellidos", data: "lastname" },
            { title: "Correo", data: "email" },
            {
                title: "Estado",
                data: "status",
                render: function (data) {
                    return data ? "Activo" : "Inactivo";
                },
            }]
        );
    } catch (error) {
        console.error("Error fetching users:", error);
    }
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

const changeStatus = async (id, status) => {
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
            const data = {
                status,
            }
            await core(`user/inactivate/${id}`, "PATCH", data, jwtApi);
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
    $("#dataTable").DataTable().clear().destroy();
    await getUsers();
}