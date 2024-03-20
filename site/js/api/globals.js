const urlBaseApi = "https://optometry-api-production.up.railway.app/";

const jwtApi = localStorage.getItem("jwt");

const core = async (endPoint, method, data, jwtApi = null) => {
    try {
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
        return response.json();
    } catch (error) {
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