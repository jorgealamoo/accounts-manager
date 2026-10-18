import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
} from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    FormsModule,
    IonInput,
    IonButton,
  ],
})
export class Tab2Page {
  selectedOption: string = 'hobbies-vices';
  expenseAmount: number | null = null;
  expenseDate: string = this.getTodayDate();

  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  addExpense() {
    console.log(
      'Selected Option:',
      this.selectedOption,
      '\nExpense Date:',
      this.expenseDate,
      '\nExpense Amount:',
      this.expenseAmount,
    );
  }
}
