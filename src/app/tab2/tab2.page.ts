import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/angular';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    FormsModule,
    IonInput,
    IonButton,
    IonText,
    ReactiveFormsModule,
  ],
})
export class Tab2Page {
  readonly accounts = [
    { id: 'cash', name: 'Efectivo' },
    { id: 'account-1', name: 'Cuenta 1' },
    { id: 'account-2', name: 'Cuenta 2' },
  ];
  selectedOption: string = 'hobbies-vices';
  expenseAmount: number | null = null;
  expenseDate: string = this.getTodayDate();
  private readonly formBuilder = inject(FormBuilder);

  readonly expenseForm = this.formBuilder.group({
    expenseAccount: ['', Validators.required],
    expenseType: [this.selectedOption, Validators.required],
    expenseDate: [this.expenseDate, Validators.required],
    expenseAmount: [this.expenseAmount, [Validators.required, Validators.min(0.01)]],
  });

  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  addExpense(): void {
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    const expense = this.expenseForm.getRawValue();

    console.log("Gasto válido añadido", expense);
  }

  get expenseTypeControl() {
    return this.expenseForm.controls['expenseType'];
  }

  get expenseDateControl() {
    return this.expenseForm.controls['expenseDate'];
  }

  get expenseAmountControl() {
    return this.expenseForm.controls['expenseAmount'];
  }
}
