import { Component, Input } from '@angular/core';
import { Monde } from 'src/app/models/monde';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() mondeRecupere!: Monde[];



  getHabitantsParMonde(monde: Monde): number {
    let totalHabitants = 0;
    for (const quartier of monde.quartier) {
      for (const adresse of quartier.adresse) {
        totalHabitants += adresse.sims.length;
      }
    }
    return totalHabitants;
  }

  // Méthode pour calculer le nombre total d'habitants pour tous les mondes
  getTotalHabitants(): number {
    let totalHabitants = 0;
    for (const monde of this.mondeRecupere) {
      totalHabitants += this.getHabitantsParMonde(monde);
    }
    return totalHabitants;
  }



}
