import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputMsgComponent } from './input-msg/input-msg.component';
import { ListMsgComponent } from './list-msg/list-msg.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputMsgComponent, ListMsgComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [InputMsgComponent, ListMsgComponent],
})
export class ComponentsModule {}
