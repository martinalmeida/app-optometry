$(document).ready(async () => {
    sesion();
    setUserSession();
    if (
        localStorage.getItem("dataStore") == null ||
        localStorage.getItem("dataStore") == undefined ||
        localStorage.getItem("dataStore") == ""
    ) {
        window.location.href = "./index.html";
    }
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    await getDataRegister(dataStore.id);
    $("#titleCard").text(`${dataStore.title}`);
    $("#btnSave").attr("class", `btn ${dataStore.class} btn-user`);
    $("#btnSave").html(`${dataStore.button} <i class="fas fa-save"></i> `);
});

const savedRegister = async () => {
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    const sesionUser = JSON.parse(userApi)
    let name = $("#name").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let password = $("#password").val();

    const validated = validateForm([name, lastname, email, password]);
    const data = {
        name,
        lastname,
        email,
        password,
        id_role: 2,
        id_comp: sesionUser.id_comp
    }

    if (dataStore.id == null && validated) {
        const response = await core("user", "POST", data, jwtApi);
        if (response) {
            localStorage.removeItem("dataStore");
            window.location.href = "./index.html";
        }
    }
    if (dataStore.id != null && validated) {
        const response = await core(`user/${dataStore.id}`, "PUT", data, jwtApi);
        if (response) {
            localStorage.removeItem("dataStore");
            window.location.href = "./index.html";
        }
    }
}

const getDataRegister = async (id) => {
    if (id != null) {
        const { userById } = await core(`user/${id}`, "GET", null, jwtApi);
        if (userById) {
            $("#name").val(userById.name);
            $("#lastname").val(userById.lastname);
            $("#email").val(userById.email);
        }
    }
}