
import { Component, OnInit } from '@angular/core';
import { NetflixModel, Film, Footer } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public netflixModel: NetflixModel;
  public sciFi: Film;
  public terror: Film;
  public accion: Film;
  public anime: Film;
  public comedia: Film;
  public footer: Footer;
 
  constructor() {
    this.netflixModel = {
      navbar : {
        logo: {
          src: "../../../assets/images/LOGO/SERGFLIX.png",
          alt: "netflix logo"
        }
      },
      hero: {
        title: "Los 5 más populares",
        imgGallery: [
          {
            src: "../../../assets/images/Top10/1-papel.webp",
            alt: "La casa de papel"
          },
          {
            src: "../../../assets/images/Top10/2-reina.webp",
            alt: "Reina"
          },
          {
            src: "../../../assets/images/Top10/3-titanes.webp",
            alt: "Titans"
          },
          {
            src: "../../../assets/images/Top10/4-lostinspace.webp",
            alt: "Lost in Space"
          },
          {
            src: "../../../assets/images/Top10/5-dondecaben.webp",
            alt: "Donde Caben"
          }
        ]
      }
    },
    this.sciFi = {
      title: "Ciencia ficción",
      imgGallery: [
        {
          src: "../../../assets/images/Sci-fi/gits.webp",
          alt: "GITS"
        },
        {
          src: "../../../assets/images/Sci-fi/deepimpact.webp",
          alt: "Deep Impact"
        },
        {
          src: "../../../assets/images/Sci-fi/12monos.webp",
          alt: "12 Monos"
        },
        {
          src: "../../../assets/images/Sci-fi/core.webp",
          alt: "Core"
        },
        {
          src: "../../../assets/images/Sci-fi/6dia.webp",
          alt: "6 dia"
        }
      ]
    },
    this.terror = {
      title: "Terror",
      imgGallery: [
        {
          src: "../../../assets/images/Terror/apostol.jpg",
          alt: "Apostol"
        },
        {
          src: "../../../assets/images/Terror/calleterror.jpg",
          alt: "Calle Terror"
        },
        {
          src: "../../../assets/images/Terror/life.webp",
          alt: "Life"
        },
        {
          src: "../../../assets/images/Terror/multiple.webp",
          alt: "Multiple"
        },
        {
          src: "../../../assets/images/Terror/reflejos.webp",
          alt: "Reflejos"
        }
      ]
    },
    this.accion = {
      title: "Accion",
      imgGallery: [
        {
          src: "../../../assets/images/Accion/ejercitomuertos.jpg",
          alt: "Ejercito Muertos"
        },
        {
          src: "../../../assets/images/Accion/elprotector.webp",
          alt: "El Protector"
        },
        {
          src: "../../../assets/images/Accion/equalizer2.webp",
          alt: "Equalizaer 2"
        },
        {
          src: "../../../assets/images/Accion/heat.webp",
          alt: "Heat"
        },
        {
          src: "../../../assets/images/Accion/johnwick2.webp",
          alt: "John Wick 2"
        }
      ]
    },
    this.anime = {
      title: "Anime",
      imgGallery: [
        {
          src: "../../../assets/images/Anime/laputa.webp",
          alt: "Laputa"
        },
        {
          src: "../../../assets/images/Anime/mononoke.webp",
          alt: "Mononoke"
        },
        {
          src: "../../../assets/images/Anime/perfectblue.webp",
          alt: "Perfect Blue"
        },
        {
          src: "../../../assets/images/Anime/evangelion.webp",
          alt: "Evangelion"
        },
        {
          src: "../../../assets/images/Anime/ninokuni.jpg",
          alt: "NI NO KUNI"
        }
      ]
    },
    this.comedia = {
      title: "Comedia",
      imgGallery: [
        {
          src: "../../../assets/images/Comedia/casi300.webp",
          alt: "casi300"
        },
        {
          src: "../../../assets/images/Comedia/cazafantasmas.webp",
          alt: "cazafantasmas"
        },
        {
          src: "../../../assets/images/Comedia/dictador.webp",
          alt: "Dictador"
        },
        {
          src: "../../../assets/images/Comedia/rickandmorty.webp",
          alt: "rickandmorty"
        },
        {
          src: "../../../assets/images/Comedia/scarymovie3.webp",
          alt: "scarymovie3"
        }
      ]
    }
    this.footer = {
      title: "Sergio González Gómez",
      year: 2022
    }
   }

  ngOnInit(): void {
  }

}
