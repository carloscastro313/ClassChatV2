import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatBPageRoutingModule } from './chat-b-routing.module';

import { ChatBPage } from './chat-b.page';
import { UtilityModule } from '../../utility/utility.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatBPageRoutingModule,
    UtilityModule,
    ComponentsModule,
  ],
  declarations: [ChatBPage],
})
export class ChatBPageModule {}
