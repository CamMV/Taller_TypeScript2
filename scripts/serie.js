// 1. Crear una clase que se llame Serie con los siguientes atributos: nombre, genero, creador, año
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, image, link) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.image = image;
        this.link = link;
    }
    return Serie;
}());
export { Serie };
