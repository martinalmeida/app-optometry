$(document).ready(async () => {
    sesion();
    setUserSession();
    if (
        localStorage.getItem("dataStore") == null ||
        localStorage.getItem("dataStore") == undefined ||
        localStorage.getItem("dataStore") == ""
    ) {
        window.location.href = "./";
    }
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    $("#titleCard").text(`${dataStore.title}`);
    $("#btnSave").attr("class", `btn ${dataStore.class} btn-user`);
    $("#btnSave").html(`${dataStore.button} <i class="fas fa-save"></i> `);
});

const savedRegister = async () => {
    $("#overlayApi").fadeIn(1000);
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    if (dataStore.id == null) {
        window.alert("Es de crear");
    }
    if (dataStore.id != null) {
        window.alert("Es de actualizar");
    }
    $("#overlayApi").fadeOut(1000);
}