// 1. Crear una clase que se llame Serie con los siguientes atributos: nombre, genero, creador, año
export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    image: string;
    link: string;
    constructor(id: number, name: string, channel: string, seasons: number, description: string, image: string, link: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}