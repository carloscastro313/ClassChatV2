import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAPageRoutingModule } from './chat-a-routing.module';

import { ChatAPage } from './chat-a.page';
import { UtilityModule } from '../../utility/utility.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAPageRoutingModule,
    UtilityModule,
    ComponentsModule,
  ],
  declarations: [ChatAPage],
})
export class ChatAPageModule {}
