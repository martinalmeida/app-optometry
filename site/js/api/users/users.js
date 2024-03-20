$(document).ready(async () => {
    sesion();
    setUserSession();
    const users = await getUsers();
    initializeDataTable(users);
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
    $('#dataTableUsers').DataTable({
        data: users,
        columns: [
            { title: "ID", data: "id" },
            { title: "Nombre", data: "name" },
            { title: "Apellidos", data: "lastname" },
            { title: "Correo", data: "email" },
            {
                title: "Estado", data: "status", render: function (data) {
                    return data ? "Activo" : "Inactivo";
                }
            },
            {
                title: "Acciones",
                data: null,
                render: function (data, type, row) {
                    // Aquí puedes personalizar el contenido de la columna de acciones
                    // Por ejemplo, agregar un botón con el ID del usuario
                    return `<button onclick="mostrarDetalles(${data.id})">Ver Detalles</button>`;
                },
            },
        ],
    });
};
