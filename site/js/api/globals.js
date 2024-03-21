const urlBaseApi = "https://optometry-api-production.up.railway.app/";
const urlBase = "https://app-optometry.up.railway.app/";

const jwtApi = localStorage.getItem("jwt");
const userApi = localStorage.getItem("user");

$(document).ready(function () {
    $("#overlayApi").fadeOut(1000);
});

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
        title: "Deseas cerrar sesion?",
        text: "Se cerrara la sesion actual",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar",
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